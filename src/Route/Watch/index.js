import React from "react";
import { Link } from "react-router-dom";
import {
  getVideoById,
  getYoutubeEmbedUrl,
  getChannelData,
  getRelateToVideos,
  TimeTransformer
} from "../../functions";
import ChannelThumb from "../../component/ChannelThumb";
import Loading from "../../component/Loading";
import VideoThumb from "../../component/VideoThumb";

export default class Watch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }
  getVideoById = id => {
    getVideoById(id, currentVideo => {
      if (!currentVideo) {
        this.props.history.push("/");
        return;
      }
      getRelateToVideos(id, relatedVideo => {
        getChannelData(currentVideo.snippet.channelId, data => {
          const chThumb = data.snippet.thumbnails.default.url;
          this.setState({
            currentVideo,
            relatedVideo,
            chThumb,
            isLoading: false
          });
        });
      });
    });
  };
  componentDidUpdate(prevProps) {
    const currentId = this.props.match.params.id;
    if (prevProps.match.params.id !== currentId) {
      this.getVideoById(currentId);
    }
  }
  componentDidMount() {
    this.getVideoById(this.props.match.params.id);
  }
  render() {
    const { isLoading } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <div className="container pt-4 watch-wrapper">
        <div className="row">
          <div className="col-lg-8">
            <div className="player-area">
              <div className="embed-responsive embed-responsive-16by9 mb-4">
                <iframe
                  src={getYoutubeEmbedUrl(this.state.currentVideo.id)}
                  className="embed-responsive-item"
                  allowFullScreen="1"
                  title={this.state.currentVideo.snippet.title}
                />
              </div>
              <h3 className="h4 mb-3">
                {this.state.currentVideo.snippet.title}
              </h3>
              <div className="video-info-area">
                <div className="d-flex align-items-center mb-3">
                  <ChannelThumb
                    src={this.state.chThumb}
                    title={this.state.currentVideo.snippet.title}
                  />
                  <p className="h6 mb-0">
                    {this.state.currentVideo.snippet.channelTitle}
                  </p>
                </div>
                <ul className="tags d-flex flex-wrap">
                  {this.state.currentVideo.snippet.tags
                    ? this.state.currentVideo.snippet.tags
                        .slice(0, 10)
                        .map(tag => {
                          return (
                            <li key={tag} className="mr-2">
                              <Link
                                to={`/search/${tag}`}
                                className="badge badge-info h5"
                              >{`#${tag}`}</Link>
                            </li>
                          );
                        })
                    : null}
                </ul>
                <p className="description">
                  {this.state.currentVideo.snippet.description}
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <aside className="related-video-area">
              {this.state.relatedVideo.map(video => {
                return (
                  <div className="video-item" key={video.id.videoId}>
                    <div className="thumb-area">
                      <VideoThumb
                        id={video.id.videoId}
                        thumbnailUrl={video.snippet.thumbnails.high.url}
                      />
                    </div>
                    <div className="text-area">
                      <h6>
                        <Link
                          to={`/watch/${video.id.videoId}`}
                          className="text-dark"
                        >
                          {video.snippet.title}
                        </Link>
                      </h6>
                      <ul>
                        <li>{video.snippet.channelTitle}</li>
                        <li>{TimeTransformer(video.snippet.publishedAt)}</li>
                      </ul>
                    </div>
                  </div>
                );
              })}
            </aside>
          </div>
        </div>
      </div>
    );
  }
}
