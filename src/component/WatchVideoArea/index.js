import React from "react";
import ChannelThumb from "../ChannelThumb";
import { Link } from "react-router-dom";
import { getYoutubeEmbedUrl } from "../../functions";

export default function WatchVideoArea({ currentVideo, chThumb }) {
  return (
    <div className="player-area">
      <div className="embed-responsive embed-responsive-16by9 mb-4">
        <iframe
          src={getYoutubeEmbedUrl(currentVideo.id)}
          className="embed-responsive-item"
          allowFullScreen="1"
          title={currentVideo.snippet.title}
        />
      </div>
      <h3 className="h4 mb-3">{currentVideo.snippet.title}</h3>
      <div className="video-info-area">
        <div className="d-flex align-items-center mb-3">
          <ChannelThumb src={chThumb} title={currentVideo.snippet.title} />
          <p className="h6 mb-0">{currentVideo.snippet.channelTitle}</p>
        </div>
        <ul className="tags d-flex flex-wrap">
          {currentVideo.snippet.tags
            ? currentVideo.snippet.tags.slice(0, 10).map(tag => {
                return (
                  <li key={tag} className="mr-2">
                    <Link
                      to={`/search/${tag}`}
                      className="badge badge-info h5"
                    >{`#${tag}`}</Link>
                  </li>
                );
              })
            : null}
        </ul>
        <p className="description">{currentVideo.snippet.description}</p>
      </div>
    </div>
  );
}
