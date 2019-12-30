import React from "react";
import VideoBox from "./VideoBox";

export default function PopularList({ videos }) {
  return (
    <div>
      <h3>PopularList</h3>
      {videos.map(video => (
        <VideoBox video={video} key={video.id} />
      ))}
    </div>
  );
}
