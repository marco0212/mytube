import React, { Fragment } from "react";
import Header from "../../component/Header";
import HomeVideoComponent from "../../component/HomeVideoComponent";
import { getPopularVideos } from "../../functions";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoad: false,
      currentVideos: []
    };
  }
  componentDidMount() {
    this.getPopularVideos();
  }
  async getPopularVideos() {
    await getPopularVideos(data => {
      this.setState({ currentVideos: data, isLoad: true });
    });
  }
  render() {
    return (
      <Fragment>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>인기 있는 동영상</h2>
            </div>
          </div>
          <div className="row">
            {this.state.currentVideos.map(videoData => {
              return (
                <HomeVideoComponent
                  key={videoData.id}
                  id={videoData.id}
                  snippet={videoData.snippet}
                />
              );
            })}
          </div>
        </div>
      </Fragment>
    );
  }
}
