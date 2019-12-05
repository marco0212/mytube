import React from "react";
import { Link } from "react-router-dom";
import {
  getVideoById,
  getYoutubeEmbedUrl,
  getSearchedVideos
} from "../../functions";

export default class Watch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      currentVideo: {},
      relatedVideo: []
    };
    const { match } = this.props;
    this.id = match.params.id;
  }
  componentDidMount() {
    getVideoById(this.id, data => {
      this.setState({ currentVideo: data, isLoading: false });
      if (!this.state.isLoading) {
        getSearchedVideos(this.tag, data => {
          this.setState({ relatedVideo: data });
        });
      }
    });
  }
  componentDidUpdate() {
    getSearchedVideos(this.tag, data => {
      this.setState({ relatedVideo: data });
    });
  }
  render() {
    let video, title, description, time, channelTitle, tags;
    let iframeSrc = getYoutubeEmbedUrl(this.id);
    if (!this.state.isLoading) {
      video = this.state.currentVideo.snippet;
      title = video.title;
      description = video.description;
      time = video.publishedAt;
      channelTitle = video.channelTitle;
      if (video.tags) {
        tags = video.tags.slice(0, 5);
        this.tag = tags[0];
      }
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
                width="560"
                height="315"
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
              <ul className="related-tags">
                {tags.map(tag => (
                  <li key={tag}>
                    <Link to={`/search/${tag}`}>{tag}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <aside>
            <ul>
              {this.state.relatedVideo.map(video => {
                console.log(video);
                return (
                  <li>
                    <Link to={`/watch/${video.id.videoId}`}>
                      {video.snippet.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </aside>
        </div>
      </section>
    );
  }
}
