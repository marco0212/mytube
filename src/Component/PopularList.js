import React from "react";
import VideoBox from "./VideoBox";

export default function PopularList({ videos }) {
  return (
    <div>
      <h3>PopularList</h3>
      <ul>
        {videos.map(video => (
          <VideoBox video={video} key={video.id} />
        ))}
      </ul>
    </div>
  );
}
