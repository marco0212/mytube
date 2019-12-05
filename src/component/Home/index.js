import React from "react";
import { Link } from "react-router-dom";

export default function Home(props) {
  const { HomeVideos } = props;
  return (
    <section className="home">
      <h2>Most Popular Videos</h2>
      <ul>
        {HomeVideos.map(video => {
          const thumbnail = video.snippet.thumbnails.high.url;
          const title = video.snippet.title;
          const description = video.snippet.description;
          const videoId = video.id;
          return (
            <li key={videoId}>
              <Link to={`/watch/${videoId}`}>
                <img src={thumbnail} alt={title} />
                <h3>{title}</h3>
                <p>{description}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
