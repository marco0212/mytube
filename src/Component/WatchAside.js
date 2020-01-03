import React, { useState, useEffect } from "react";
import VideoBox from "./VideoBox";
import styled from "styled-components";
import LoadingBox from "./LoadingBox";

export default function WatchAside({ relateVideos }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (relateVideos) setIsLoading(false);
  }, [relateVideos]);

  return (
    <Aside>
      {isLoading
        ? Array(4)
            .fill("")
            .map((x, i) => <LoadingBox channelThumbnail key={i} />)
        : relateVideos.map(video => {
            const {
              id: { videoId },
              snippet: {
                title,
                channelTitle,
                publishedAt,
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
                channelTitle={channelTitle}
                thumbnail={url}
                publishedAt={publishedAt}
              />
            );
          })}
    </Aside>
  );
}

const Aside = styled.aside`
  & > div {
    &:last-child {
      margin-bottom: 0;
    }
    margin-bottom: 30px;
  }
`;
