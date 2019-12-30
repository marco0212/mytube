import React from "react";
import { Link } from "react-router-dom";

export default function VideoBox({ video }) {
  const {
    id,
    snippet: {
      title,
      thumbnails: {
        high: { url }
      }
    }
  } = video;

  return (
    <li>
      <Link to={`/watch/${id}`}>
        <img src={url} alt={title} />
      </Link>
    </li>
  );
}
