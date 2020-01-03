import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { timeTransformer } from "../functions";
import LoadingBox from "./LoadingBox";

export default function SearchVideoList({ videos }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (videos) setIsLoading(false);
  }, [videos]);

  return (
    <GridContainer>
      {isLoading
        ? Array(4)
            .fill("")
            .map((x, i) => <LoadingBox search={true} key={i} />)
        : videos.map(video => {
            const {
              id: { videoId },
              snippet: {
                title,
                channelTitle,
                description,
                publishedAt,
                thumbnails: {
                  high: { url }
                }
              }
            } = video;
            return (
              <VideoItem key={videoId}>
                <Link to={`/watch/${videoId}`}>
                  <Thumbnail thumbnail={url} />
                </Link>

                <VideoInfo>
                  <Link to={`/watch/${videoId}`}>
                    <VideoTitle>{title}</VideoTitle>
                  </Link>
                  <p>{`${channelTitle} • ${timeTransformer(publishedAt)}`} </p>
                  <p>{description}</p>
                </VideoInfo>
              </VideoItem>
            );
          })}
    </GridContainer>
  );
}

const GridContainer = styled.div`
  display: grid;
  grid-gap: 30px;
`;
const VideoItem = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-gap: 30px;
`;
const Thumbnail = styled.div`
  border-radius: ${props => props.theme.borderRadius};
  background: url(${props => props.thumbnail}) no-repeat center center / cover;
  width: 100%;
  padding-top: 56%;
`;
const VideoInfo = styled.div`
  p:first-of-type {
    color: ${props => props.theme.lightBlackColor};
    margin-bottom: 5px;
  }
`;
const VideoTitle = styled.h3`
  color: ${props => props.theme.blackColor};
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 10px;
  max-width: 450px;
`;
