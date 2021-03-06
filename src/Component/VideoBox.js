import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  durationTransformer,
  timeTransformer,
  viewCountTransformer
} from "../functions";
import { YOUTUBE_API_KEY } from "../API_KEY";

export default function VideoBox(props) {
  const [channelThumbnail, setChannelThumbnail] = useState("");
  const {
    id,
    title,
    thumbnail,
    viewCount,
    publishedAt,
    channelId,
    channelTitle,
    duration
  } = props;

  useEffect(() => {
    getChannelThumbnail();
  }, []);

  function getChannelThumbnail() {
    if (channelId) {
      fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${YOUTUBE_API_KEY}`
      )
        .then(response => response.json())
        .then(jsondata => {
          const {
            snippet: {
              thumbnails: {
                medium: { url }
              }
            }
          } = jsondata.items[0];
          setChannelThumbnail(url);
        });
    }
  }
  return (
    <Box>
      <Link to={`/watch/${id}`}>
        <Thumbnail thumbnail={thumbnail}>
          {duration && <span>{durationTransformer(duration)}</span>}
        </Thumbnail>
      </Link>
      <BoxText>
        {channelId && (
          <div className="channelThumbnail-wrap">
            <img src={channelThumbnail} alt={channelTitle} />
          </div>
        )}
        <div>
          <Link to={`/watch/${id}`}>{title}</Link>
          <p>{channelTitle}</p>
          <p>
            {viewCount && `조회수 ${viewCountTransformer(viewCount)} • `}
            {timeTransformer(publishedAt)}
          </p>
        </div>
      </BoxText>
    </Box>
  );
}

const Box = styled.div`
  ${props => props.theme.whiteBox}
  overflow: hidden;
`;
const Thumbnail = styled.div`
  background: url(${props => props.thumbnail}) no-repeat center center / cover;
  width: 100%;
  padding-top: 56%;
  position: relative;
  span {
    position: absolute;
    bottom: 5px;
    right: 5px;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.8);
    padding: 0 5px;
  }
`;
const BoxText = styled.div`
  position: relative;
  padding: 10px;
  display: flex;
  .channelThumbnail-wrap {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 10px;
    & + div {
      width: calc(100% - 50px);
    }
  }
  a {
    display: block;
    font-size: 16px;
    max-height: 42px;
    overflow: hidden;
    color: ${props => props.theme.lightBlackColor};
    font-weight: bold;
    margin-bottom: 5px;
  }
`;
