import React from "react";
import { Link } from "react-router-dom";

export default function VideoThumb({ id, thumbnailUrl }) {
  return (
    <Link
      to={`/watch/${id}`}
      className="video-thumb mb-3"
      style={{ backgroundImage: `url(${thumbnailUrl})` }}
    ></Link>
  );
}
