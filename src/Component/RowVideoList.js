import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { timeTransformer } from "../functions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import LoadingBox from "./LoadingBox";

export default function SearchVideoList(props) {
  const { videos, removeWatchLaterItem } = props;
  const [isLoading, setIsLoading] = useState(true);
  const dummyLoadingBox = Array(4).fill(null);

  useEffect(() => {
    if (videos) setIsLoading(false);
  }, [videos]);

  return (
    <GridContainer>
      {isLoading
        ? dummyLoadingBox.map((x, i) => <LoadingBox search={true} key={i} />)
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
                  {removeWatchLaterItem && (
                    <RemoveWatchLaterButton
                      onClick={removeWatchLaterItem.bind(null, videoId)}
                    >
                      <FontAwesomeIcon icon={faTimes} />
                    </RemoveWatchLaterButton>
                  )}
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
  &:hover button {
    display: block;
  }
`;
const Thumbnail = styled.div`
  border-radius: ${props => props.theme.borderRadius};
  background: url(${props => props.thumbnail}) no-repeat center center / cover;
  width: 100%;
  padding-top: 56%;
`;
const VideoInfo = styled.div`
  position: relative;
  a {
    display: inline-block;
  }
  p:first-of-type {
    color: ${props => props.theme.lightBlackColor};
    margin-bottom: 5px;
  }
  p:last-of-type {
    max-height: 42px;
    overflow: hidden;
  }
`;
const VideoTitle = styled.h3`
  color: ${props => props.theme.blackColor};
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 10px;
  max-width: 450px;
`;
const RemoveWatchLaterButton = styled.button`
  cursor: pointer;
  display: none;
  position: absolute;
  right: 0;
  top: 0;
  background-color: transparent;
  font-size: 16px;
  border: 0;
  color: ${props => props.theme.greyColor};
`;
