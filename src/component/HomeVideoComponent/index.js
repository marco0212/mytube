import React from "react";
import { Link } from "react-router-dom";
import { TimeTransformer } from "../../functions";
import Truncate from "react-truncate";
export default function HomeVideoComponent({
  id,
  title,
  thumbnailUrl,
  chTitle,
  time
}) {
  return (
    <div className="col-md-6 col-sm-12 col-lg-4 mb-3" key={id}>
      <div className="video-item">
        <Link
          to={`/watch/${id}`}
          className="video-thumb mb-3"
          style={{ backgroundImage: `url(${thumbnailUrl})` }}
        ></Link>
        <div className=" d-flex">
          <div className="channel-thumb-area mr-3">
            <div className="img-wrap rounded-circle overflow-hidden">
              <img
                src="https://yt3.ggpht.com/a-/AAuE7mC2K6CyIOGWwuOG7yqVcpIS0ZrC1JZDz1FrMg=s68-c-k-c0x00ffffff-no-rj-mo"
                className="img-fluid"
                alt={chTitle}
              />
            </div>
          </div>
          <div className="video-info-area">
            <h5>
              <Link to={`/watch/${id}`} className="text-dark">
                <Truncate lines={2} ellipsis="...">
                  {title}
                </Truncate>
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
