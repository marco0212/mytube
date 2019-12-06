import React, { Fragment } from "react";
import Header from "../../component/Header";
import { getYoutubeEmbedUrl } from "../../functions";

export default function Watch(props) {
  const id = props.match.params.id;
  console.log(props.location.state.snippet);
  const { title, description } = props.location.state.snippet;
  return (
    <Fragment>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-12">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                src={getYoutubeEmbedUrl(id)}
                title={title}
                allowFullScreen="1"
                className="embed-responsive-item"
              />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
          <div className="col-md-4 col-sm-12">aside</div>
        </div>
      </div>
    </Fragment>
  );
}
