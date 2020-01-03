import React, { useState, useEffect } from "react";
import VideoBox from "./VideoBox";
import styled from "styled-components";

export default function WatchAside({ relateVideos }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (relateVideos) setIsLoading(false);
  }, [relateVideos]);

  return (
    !isLoading && (
      <Aside>
        {relateVideos.map(video => {
          const {
            id: { videoId },
            snippet: {
              title,
              thumbnails: {
                high: { url }
              }
            }
          } = video;
          return (
            <VideoBox
              key={videoId}
              id={videoId}
              title={title}
              thumbnail={url}
            />
          );
        })}
      </Aside>
    )
  );
}

const Aside = styled.aside`
  & > div {
    margin-bottom: 30px;
  }
`;
