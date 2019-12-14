import React from "react";
import Loading from "../../component/Loading";
import { getSearchedVideos } from "../../functions";
import SearchVideoComponent from "../../component/SearchVideoComponent";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      searchedList: []
    };
  }
  fetchSearchData = keyword => {
    getSearchedVideos(keyword, videos => {
      if (!videos) {
        this.props.history.push("/");
        return;
      }
      this.setState({ isLoading: false, searchedList: videos });
    });
  };
  componentDidMount() {
    this.fetchSearchData(this.props.match.params.keyword);
  }
  componentDidUpdate(prevProps) {
    const currentKeyword = this.props.match.params.keyword;
    if (prevProps.match.params.keyword !== currentKeyword) {
      this.setState({ isLoading: true });
      this.fetchSearchData(currentKeyword);
    }
  }
  render() {
    const { isLoading } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <div className="container pt-4 search-wrapper">
        {this.state.searchedList.map(item => {
          return (
            <SearchVideoComponent
              id={item.id.videoId}
              title={item.snippet.title}
              description={item.snippet.description}
              thumbnailUrl={item.snippet.thumbnails.high.url}
              chTitle={item.snippet.channelTitle}
              time={item.snippet.publishedAt}
            />
          );
        })}
      </div>
    );
  }
}
