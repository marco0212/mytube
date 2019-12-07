import React from "react";
import { getPopularVideos } from "../../functions";
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
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
      "Loading..."
    ) : (
      <ul>
        {this.state.videoData.map(data => {
          return (
            <li>
              <img src={data.snippet.thumbnails.default.url} />
              <p>{data.snippet.title}</p>
            </li>
          );
        })}
      </ul>
    );
  }
}
