import React from "react";
import WatchVideoArea from "../../component/WatchVideoArea";
import Loading from "../../component/Loading";
import VideoThumb from "../../component/VideoThumb";
import { Link } from "react-router-dom";
import {
  getVideoById,
  getChannelData,
  getRelateToVideos,
  TimeTransformer
} from "../../functions";

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
            <WatchVideoArea
              currentVideo={this.state.currentVideo}
              chThumb={this.state.chThumb}
            />
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
