import React from "react";
import { getVideoById, getYoutubeEmbedUrl } from "../../functions";

export default class Watch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      currentVideo: {}
    };
    const { match } = this.props;
    this.id = match.params.id;
  }
  componentDidMount() {
    getVideoById(this.id, data => {
      this.setState({ currentVideo: data, isLoading: false });
    });
  }
  render() {
    let iframeSrc = getYoutubeEmbedUrl(this.id);
    return this.state.isLoading ? (
      "loading"
    ) : (
      <section className="watch">
        <h2 className="sound-only"></h2>
        <div className="watch-wrap">
          <div className="video-area">
            <div className="frame-wrap">
              <iframe
                src={iframeSrc}
                width="560"
                height="315"
                title="title"
                frameBorder="0"
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen="1"
              />
            </div>
            <h3></h3>
          </div>
          <aside>
            <ul>
              <li>other video</li>
            </ul>
          </aside>
        </div>
      </section>
    );
  }
}
