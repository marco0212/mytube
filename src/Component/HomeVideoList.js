import React, { useState, useEffect } from "react";
import VideoBox from "./VideoBox";
import styled from "styled-components";
import LoadingBox from "./LoadingBox";

export default function HomeVideoList({ videos }) {
  const [isLoading, setIsLoading] = useState(true);
  const dummyLoadingBox = Array(6).fill(null);

  useEffect(() => {
    if (videos) setIsLoading(false);
  }, [videos]);

  return (
    <GridContainer>
      {isLoading
        ? dummyLoadingBox.map((x, i) => <LoadingBox channelThumbnail key={i} />)
        : videos.map(video => {
            const {
              id,
              contentDetails: { duration },
              statistics: { viewCount },
              snippet: {
                title,
                channelId,
                channelTitle,
                publishedAt,
                thumbnails: {
                  high: { url }
                }
              }
            } = video;
            return (
              <VideoBox
                key={id}
                id={id}
                title={title}
                thumbnail={url}
                channelTitle={channelTitle}
                channelId={channelId}
                publishedAt={publishedAt}
                duration={duration}
                viewCount={viewCount}
              />
            );
          })}
    </GridContainer>
  );
}

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
`;
