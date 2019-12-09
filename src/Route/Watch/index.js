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
    getVideoById(id, data => {
      if (!data) {
        this.props.history.push("/");
        return;
      }
      this.setState({ data });
      getRelateToVideos(id, data => {
        this.setState({
          relatedVideo: data
        });
        getChannelData(this.state.data.snippet.channelId, data => {
          this.setState({
            chThumb: data.snippet.thumbnails.default.url,
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
  componentWillUnmount() {
    this.setState({ isLoading: true });
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
                  src={getYoutubeEmbedUrl(this.state.data.id)}
                  className="embed-responsive-item"
                  allowFullScreen="1"
                  title={this.state.data.snippet.title}
                />
              </div>
              <h3 className="mb-3">{this.state.data.snippet.title}</h3>
              <div className="video-info-area">
                <div className="d-flex align-items-center mb-3">
                  <ChannelThumb
                    src={this.state.chThumb}
                    title={this.state.data.snippet.title}
                  />
                  <p className="h5 mb-0">
                    {this.state.data.snippet.channelTitle}
                  </p>
                </div>
                <ul className="tags d-flex flex-wrap">
                  {this.state.data.snippet.tags
                    ? this.state.data.snippet.tags.slice(0, 10).map(tag => {
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
                <p>{this.state.data.snippet.description}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <aside className="related-video-area">
              {this.state.relatedVideo.map((video, i) => {
                return (
                  <div className="video-item" key={video.id.videoId}>
                    <div className="thumb-area">
                      <VideoThumb
                        id={video.id.videoId}
                        thumbnailUrl={video.snippet.thumbnails.high.url}
                      />
                    </div>
                    <div className="text-area">
                      <h5>
                        <Link
                          to={`/watch/${video.id.videoId}`}
                          className="text-dark"
                        >
                          {video.snippet.title}
                        </Link>
                      </h5>
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
