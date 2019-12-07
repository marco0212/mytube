import React from "react";
import { Link } from "react-router-dom";
import { getPopularVideos } from "../../functions";
import Loading from "../../component/Loading";
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      videoData: Array(9).fill({
        id: "-FlxM_0S2lA",
        snippet: {
          title: "lofi hip hop radio - beats to sleep/chill to",
          thumbnails: {
            default: {
              url:
                "https://i.ytimg.com/vi/EcEMX-63PKY/hq720_live.jpg?sqp=CJiXre8F-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDGywjxOG5W1LcJ9yuYIbLOx7Ce9A"
            }
          }
        }
      })
    };
  }
  getPopularVideos = () => {
    getPopularVideos(data => {
      this.setState({ isLoading: false /*videoData: data*/ });
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
