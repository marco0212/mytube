import React, { Fragment } from "react";
import Header from "../../component/Header";
import { Link } from "react-router-dom";
import { getSearchedVideos } from "../../functions";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  getData() {
    console.log("getData");
    const keyword = this.props.match.params.keyword;
    if (keyword !== this.state.keyword) {
      getSearchedVideos(keyword, data => {
        this.setState({
          data,
          isLoading: false,
          keyword
        });
      });
    }
  }
  componentDidMount() {
    this.getData();
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
    this.getData();
  }
  render() {
    if (this.state.isLoading || !this.state.data[0]) {
      return "loading";
    }
    return (
      <Fragment>
        <Header />
        <div className="container">
          {this.state.data.map((item, i) => {
            return (
              <div
                className={`row mb-4${i ? "" : " mt-4"}`}
                key={item.id.videoId}
              >
                <div className="col-4">
                  <Link
                    to={{
                      pathname: `/watch/${item.id.videoId}`,
                      state: { snippet: item.snippet }
                    }}
                  >
                    <img
                      src={item.snippet.thumbnails.high.url}
                      alt={item.snippet.title}
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="col-8">
                  <h3>
                    <Link
                      to={{
                        pathname: `/watch/${item.id.videoId}`,
                        state: { snippet: item.snippet }
                      }}
                    >
                      {item.snippet.title}
                    </Link>
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </Fragment>
    );
  }
}
