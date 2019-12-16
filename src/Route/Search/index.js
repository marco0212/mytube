import React from "react";
import Loading from "../../component/Loading";
import { getSearchedVideos } from "../../functions";
import SearchVideoComponent from "../../component/SearchVideoComponent";
import SearchFilterBar from "../../component/SearchFilterBar";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      searchedList: [],
      orderBy: "relevance"
    };
  }
  fetchSearchData = keyword => {
    getSearchedVideos(keyword, this.state.orderBy, videos => {
      if (!videos) {
        this.props.history.push("/");
        return;
      }
      this.setState({ isLoading: false, searchedList: videos });
    });
  };
  changeFilterMode = filter => {
    this.setState({ orderBy: filter });
  };
  componentDidMount() {
    this.fetchSearchData(this.props.match.params.keyword, this.orderBy);
  }
  componentDidUpdate(prevProps, prevState) {
    const currentKeyword = this.props.match.params.keyword;
    const { orderBy } = this.state;
    if (prevProps.match.params.keyword !== currentKeyword) {
      this.setState({ isLoading: true });
      this.fetchSearchData(currentKeyword, orderBy);
    }
    if (prevState.orderBy !== orderBy) {
      this.setState({ isLoading: true });
      this.fetchSearchData(currentKeyword, orderBy);
    }
  }
  render() {
    const { isLoading, orderBy } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <div className="container pt-4 search-wrapper">
        <SearchFilterBar
          orderBy={orderBy}
          changeFilterMode={this.changeFilterMode.bind(this)}
        />
        {this.state.searchedList.map(item => {
          return (
            <SearchVideoComponent
              key={item.id.videoId}
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
