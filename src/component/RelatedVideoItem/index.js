import React from "react";
import VideoThumb from "../VideoThumb";
import { Link } from "react-router-dom";
import { timeTransformer } from "../../functions";

export default function RelatedVideoItem({
  id,
  title,
  thumbnailUrl,
  channelTitle,
  time
}) {
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
          <li>{timeTransformer(time)}</li>
        </ul>
      </div>
    </div>
  );
}
