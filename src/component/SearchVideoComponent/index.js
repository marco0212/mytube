import React from "react";
import VideoThumb from "../VideoThumb";
import { Link } from "react-router-dom";
import { TimeTransformer } from "../../functions";

export default function SearchVideoComponent({
  id,
  title,
  description,
  thumbnailUrl,
  chTitle,
  time
}) {
  return (
    <div className="row" key={id}>
      <div className="col-sm-12 col-md-5 col-lg-3">
        <div className="thumb-area">
          <VideoThumb id={id} thumbnailUrl={thumbnailUrl} />
        </div>
      </div>
      <div className="col-sm-12 col-md-7 col-lg-9">
        <div className="info-area">
          <h5>
            <Link to={`/watch/${id}`} className="text-dark">
              {title}
            </Link>
          </h5>
          <ul className="mb-5">
            <li className="text-muted mb-2">{`${chTitle} · ${TimeTransformer(
              time
            )}`}</li>
            <li className="text-muted description">{description}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
