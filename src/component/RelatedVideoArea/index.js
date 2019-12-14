import React from "react";
import VideoThumb from "../VideoThumb";
import RelatedVideoItem from "../RelatedVideoItem";
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
          <RelatedVideoItem
            id={id}
            title={title}
            thumbnailUrl={thumbnailUrl}
            channelTitle={channelTitle}
            time={time}
          />
        );
      })}
    </aside>
  );
}
