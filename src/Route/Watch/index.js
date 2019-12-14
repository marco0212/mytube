import React from "react";
import Loading from "../../component/Loading";
import WatchVideoArea from "../../component/WatchVideoArea";
import RelatedVideoArea from "../../component/RelatedVideoArea";
import {
  getVideoById,
  getChannelData,
  getRelateToVideos
} from "../../functions";

export default class Watch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      currentVideo: {},
      relatedVideos: [],
      chThumb: ""
    };
  }
  getVideoById = id => {
    getVideoById(id, currentVideo => {
      if (!currentVideo) {
        this.props.history.push("/");
        return;
      }
      getRelateToVideos(id, relatedVideos => {
        getChannelData(currentVideo.snippet.channelId, data => {
          const chThumb = data.snippet.thumbnails.default.url;
          this.setState({
            currentVideo,
            relatedVideos,
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
            <RelatedVideoArea relatedVideo={this.state.relatedVideos} />
          </div>
        </div>
      </div>
    );
  }
}
