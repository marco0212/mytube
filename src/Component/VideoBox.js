import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LinesEllipsis from "react-lines-ellipsis";
import {
  ThumbnailLink,
  TextArea,
  ChannelThumbnailWrap,
  ChannelTitle,
  VideoTitle,
  VideoInfo
} from "../style/styledComponents";
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
  });

  return (
    <li>
      <ThumbnailLink to={`/watch/${id}`} src={url} />
      <TextArea>
        <ChannelThumbnailWrap>
          {channelThumbnail && <img src={channelThumbnail} alt={title} />}
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
