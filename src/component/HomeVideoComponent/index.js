import React from "react";
import { Link } from "react-router-dom";
import VideoThumb from "../VideoThumb";
import { getChannelData, TimeTransformer } from "../../functions";
import ChannelThumb from "../ChannelThumb";
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
          <VideoThumb id={id} thumbnailUrl={thumbnailUrl} />
          <div className=" d-flex">
            <div className="channel-thumb-area mr-3">
              <ChannelThumb title={chTitle} src={this.state.chThumb} />
            </div>
            <div className="video-info-area">
              <h5>
                <Link to={`/watch/${id}`} className="text-dark">
                  {title}
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
