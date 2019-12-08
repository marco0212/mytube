import React from "react";
import { Link } from "react-router-dom";
import { getChannelData, TimeTransformer } from "../../functions";
import Truncate from "react-truncate";
export default class HomeVideoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chThumb: ""
    };
  }
  componentDidMount() {
    getChannelData(this.props.chId, data => {
      this.setState({
        chThumb: data.snippet.thumbnails.default.url
      });
    });
  }
  render() {
    const { id, title, thumbnailUrl, chTitle, time } = this.props;
    return (
      <div className="col-md-6 col-sm-12 col-lg-4 mb-3">
        <div className="video-item">
          <Link
            to={`/watch/${id}`}
            className="video-thumb mb-3"
            style={{ backgroundImage: `url(${thumbnailUrl})` }}
          ></Link>
          <div className=" d-flex">
            <div className="channel-thumb-area mr-3">
              <div className="img-wrap rounded-circle overflow-hidden">
                {this.state.chThumb && (
                  <img
                    src={this.state.chThumb}
                    className="img-fluid"
                    alt={chTitle}
                  />
                )}
              </div>
            </div>
            <div className="video-info-area">
              <h5>
                <Link to={`/watch/${id}`} className="text-dark">
                  <Truncate lines={2} ellipsis="...">
                    {title}
                  </Truncate>
                </Link>
              </h5>
              <ul>
                <li className="text-muted">{chTitle}</li>
                <li className="text-muted">{TimeTransformer(time)}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
