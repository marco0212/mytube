import React from "react";
import { getYoutubeEmbedUrl } from "../../functions";

export default class Watch extends React.Component {
  constructor(props) {
    window.scrollTo(0, 0);
    super(props);
    this.state = {
      isLoaded: false
    };
    const { match } = this.props;
    this.id = match.params.id;
  }
  componentDidMount() {
    if (!this.state.isLoaded) {
      this.props.setCurrentVideo(this.id);
      this.setState({ isLoaded: true });
    }
  }
  componentWillUnmount() {
    this.setState({ isLoaded: false });
  }
  render() {
    if (!this.props.currentVideo.snippet) {
      return "Loading";
    }
    let video, title, description, time, channelTitle;
    let iframeSrc = getYoutubeEmbedUrl(this.id);
    if (this.state.isLoaded) {
      video = this.props.currentVideo.snippet;
      title = video.title;
      description = video.description;
      time = video.publishedAt;
      channelTitle = video.channelTitle;
    }
    return this.state.isLoading ? (
      "loading"
    ) : (
      <section className="watch">
        <h2 className="sound-only">{title}</h2>
        <div className="watch-wrap">
          <div className="video-area">
            <div className="frame-wrap">
              <iframe
                src={iframeSrc}
                width="730"
                height="410"
                title={title}
                frameBorder="0"
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen="1"
              />
            </div>
            <h3>{title}</h3>
            <time>{time}</time>
            <div className="channelInfo-wrap">
              <div className="img-wrap">
                <img
                  src="https://yt3.ggpht.com/a-/AAuE7mC2K6CyIOGWwuOG7yqVcpIS0ZrC1JZDz1FrMg=s68-c-k-c0x00ffffff-no-rj-mo"
                  alt={channelTitle}
                />
              </div>
              <p>{channelTitle}</p>
            </div>
            <div className="videoInfo-wrap">
              <p>{description}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
