import React from "react";
import Loading from "../../component/Loading";
import HomeVideoComponent from "../../component/HomeVideoComponent";
import { getPopularVideos } from "../../functions";
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      videoData: []
    };
  }
  getPopularVideos = () => {
    getPopularVideos(data => {
      this.setState({ isLoading: false, videoData: data });
    });
  };
  componentDidMount() {
    this.getPopularVideos();
  }
  render() {
    const { isLoading } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <div className="container pt-4 home-wrapper">
        <div className="row">
          {this.state.videoData.map(data => {
            const id = data.id,
              title = data.snippet.title,
              thumbnailUrl = data.snippet.thumbnails.high.url,
              chTitle = data.snippet.channelTitle,
              time = data.snippet.publishedAt;
            return (
              <HomeVideoComponent
                id={id}
                title={title}
                thumbnailUrl={thumbnailUrl}
                chTitle={chTitle}
                time={time}
                key={id}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
