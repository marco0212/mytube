import React from "react";
import { Link } from "react-router-dom";
import { getPopularVideos } from "../../functions";
import Loading from "../../component/Loading";
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
      <ul>
        {this.state.videoData.map(data => {
          return (
            <li>
              <Link to={`/watch/${data.id}`}>
                <img src={data.snippet.thumbnails.default.url} />
                <p>{data.snippet.title}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}
