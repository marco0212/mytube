import React from "react";
import { Link } from "react-router-dom";
import Loading from "../../component/Loading";
import { getSearchedVideos, TimeTransformer } from "../../functions";
import VideoThumb from "../../component/VideoThumb";

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
      <Loading />
    ) : (
      <div className="container pt-4 search-wrapper">
        {this.state.data.map(data => {
          return (
            <div className="row" key={data.id.videoId}>
              <div className="col-3 col-sm-6 col-md-5 col-lg-3">
                <div className="thumb-area">
                  <VideoThumb
                    id={data.id.videoId}
                    thumbnailUrl={data.snippet.thumbnails.high.url}
                  />
                </div>
              </div>
              <div className="col-9 col-sm-6 col-md-7 col-lg-9">
                <div className="info-area">
                  <h5>
                    <Link
                      to={`/watch/${data.id.videoId}`}
                      className="text-dark"
                    >
                      {data.snippet.title}
                    </Link>
                  </h5>
                  <ul className="mb-5">
                    <li className="text-muted mb-2">{`${
                      data.snippet.channelTitle
                    } · ${TimeTransformer(data.snippet.publishedAt)}`}</li>
                    <li className="text-muted description">
                      {data.snippet.description}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
