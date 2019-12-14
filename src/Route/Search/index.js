import React from "react";
import { Link } from "react-router-dom";
import Loading from "../../component/Loading";
import { getSearchedVideos, TimeTransformer } from "../../functions";
import VideoThumb from "../../component/VideoThumb";
import SearchVideoComponent from "../../component/SearchVideoComponent";

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
  render() {
    const { isLoading } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <div className="container pt-4 search-wrapper">
        {this.state.data.map(data => {
          return (
            <SearchVideoComponent
              id={data.id.videoId}
              title={data.snippet.title}
              description={data.snippet.description}
              thumbnailUrl={data.snippet.thumbnails.high.url}
              chTitle={data.snippet.channelTitle}
              time={data.snippet.publishedAt}
            />
          );
        })}
      </div>
    );
  }
}
