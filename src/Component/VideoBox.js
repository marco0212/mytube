import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LinesEllipsis from "react-lines-ellipsis";
import { timeTransformer } from "../functions";
import { API_KEY } from "../YOUTUBE_KEY";

export default function VideoBox({ video }) {
  const {
    id,
    statistics: { viewCount },
    snippet: {
      title,
      channelTitle,
      channelId,
      publishedAt,
      thumbnails: {
        high: { url }
      }
    }
  } = video;
  const [channelThumbnail, setChannelThumbnail] = useState(null);

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${API_KEY}`
    )
      .then(response => response.json())
      .then(jsonData => {
        const {
          snippet: {
            thumbnails: {
              default: { url }
            }
          }
        } = jsonData.items[0];
        setChannelThumbnail(url);
      });
  }, [channelThumbnail]);

  return (
    <li>
      <ThumbnailLink to={`/watch/${id}`} src={url} />
      <TextArea>
        <ChannelThumbnailWrap>
          <img src={channelThumbnail} alt={title} />
        </ChannelThumbnailWrap>
        <ChannelTitle>{channelTitle}</ChannelTitle>
        <VideoTitle>
          <Link to={`/watch/${id}`}>
            <LinesEllipsis
              text={title}
              maxLine="2"
              ellipsis="..."
              trimRight
              basedOn="letters"
            />
          </Link>
        </VideoTitle>
        <VideoInfo>
          조회수 {viewCount}회 · {timeTransformer(publishedAt)}
        </VideoInfo>
      </TextArea>
    </li>
  );
}

const ThumbnailLink = styled(Link)`
  display: block;
  width: 100%;
  background: #000 url(${props => props.src}) no-repeat center center /
    calc(100% + 30px);
  padding-top: 65%;
  margin-bottom: 15px;
`;
const TextArea = styled.div`
  position: relative;
  padding: 0 5px;
`;
const ChannelThumbnailWrap = styled.div`
  position: absolute;
  top: -40px;
  right: 10px;
  border-radius: 50%;
  overflow: hidden;
  width: 50px;
  height: 50px;
  border: 3px solid #fff;
  background-color: #fff;
  img {
    width: 100%;
  }
`;
const VideoTitle = styled.h5`
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.4;
  margin-bottom: 15px;
  letter-spacing: -1px;
`;
const ChannelTitle = styled.strong`
  display: block;
  color: #b2b2b2;
  font-size: 0.9rem;
  font-weight: bold;
  line-height: 1;
  margin-bottom: 15px;
  max-width: calc(100% - 80px);
  letter-spacing: -1px;
`;
const VideoInfo = styled.span`
  color: #b2b2b2;
  font-size: 0.9rem;
  line-height: 1;
  letter-spacing: -1px;
`;
