import React from "react";
import VideoThumb from "../VideoThumb";
import { Link } from "react-router-dom";
import { TimeTransformer } from "../../functions";

export default function RelatedVideoArea({ relatedVideo }) {
  return (
    <aside className="related-video-area">
      {relatedVideo.map(video => {
        const id = video.id.videoId,
          title = video.snippet.title,
          thumbnailUrl = video.snippet.thumbnails.high.url,
          channelTitle = video.snippet.channelTitle,
          time = video.snippet.publishedAt;

        return (
          <div className="video-item" key={id}>
            <div className="thumb-area">
              <VideoThumb id={id} thumbnailUrl={thumbnailUrl} />
            </div>
            <div className="text-area">
              <h6>
                <Link to={`/watch/${id}`} className="text-dark">
                  {title}
                </Link>
              </h6>
              <ul>
                <li>{channelTitle}</li>
                <li>{TimeTransformer(time)}</li>
              </ul>
            </div>
          </div>
        );
      })}
    </aside>
  );
}
