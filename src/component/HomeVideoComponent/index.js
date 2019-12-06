import React from "react";
import { Link } from "react-router-dom";

export default function HomeVideoComponent(props) {
  const { id, snippet } = props;
  return (
    <div className="col-md-4 col-sm-6 col-xs-12">
      <Link to={{ pathname: `/watch/${id}`, state: { snippet } }}>
        <div className="img-wrap">
          <img className="img-fluid" src={snippet.thumbnails.high.url} />
        </div>
        <h5>{snippet.title}</h5>
      </Link>
    </div>
  );
}
