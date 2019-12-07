import React from "react";
import { Link } from "react-router-dom";
import { getSearchedVideos } from "../../functions";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }
  getSearchedVideos = keyword => {
    getSearchedVideos(keyword, data => {
      if (!data) {
        this.props.history.push("/");
        return;
      }
      this.setState({ isLoading: false, data });
    });
  };
  componentDidMount() {
    this.getSearchedVideos(this.props.match.params.keyword);
  }
  componentDidUpdate(prevProps) {
    const currentKeyword = this.props.match.params.keyword;
    if (prevProps.match.params.keyword !== currentKeyword) {
      this.getSearchedVideos(currentKeyword);
    }
  }
  componentWillUnmount() {
    this.setState({ isLoading: true });
  }
  render() {
    const { isLoading } = this.state;
    return isLoading ? (
      "Loading..."
    ) : (
      <ul>
        {this.state.data.map(data => {
          return (
            <li>
              <Link to={`/watch/${data.id.videoId}`}>
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
