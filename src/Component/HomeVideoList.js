import React, { useState, useEffect } from "react";
import VideoBox from "./VideoBox";
import styled from "styled-components";

export default function HomeVideoList({ videos }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (videos) setIsLoading(false);
  }, [videos]);

  return (
    <GridContainer>
      {isLoading
        ? "Loading"
        : videos.map(video => {
            const {
              id,
              snippet: {
                title,
                channelId,
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
                channelId={channelId}
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
