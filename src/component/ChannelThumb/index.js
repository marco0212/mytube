import React from "react";

export default function ChannelThumb({ src, title }) {
  return (
    <div className="channel-thumb-area mr-3">
      <div className="img-wrap rounded-circle overflow-hidden">
        {src && <img src={src} className="img-fluid" alt={title} />}
      </div>
    </div>
  );
}
