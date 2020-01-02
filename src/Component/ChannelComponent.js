import React, { useState, useEffect } from "react";
import { API_KEY } from "../YOUTUBE_KEY";
import { ChannelThumbnailWrap } from "../style/styledComponents";
import styled from "styled-components";

export default function ChannelComponent({ channelId }) {
  const [channelThumbnail, setChannelThumbnail] = useState(null);
  const [channelTitle, setChannelTitle] = useState("");
  const [channelSubscriberCount, setChannelSubscriberCount] = useState("");

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channelId}&key=${API_KEY}`
    )
      .then(response => response.json())
      .then(jsonData => {
        const {
          statistics: { subscriberCount },
          snippet: {
            title,
            thumbnails: {
              default: { url }
            }
          }
        } = jsonData.items[0];
        setChannelThumbnail(url);
        setChannelTitle(title);
        setChannelSubscriberCount(subscriberCount);
        alert("Channel Thumbnail data is fetched");
      });
  }, [channelId]);
  return (
    <ChannelThumbnailComponent>
      <ChannelThumbnailWrap>
        {channelThumbnail && <img src={channelThumbnail} alt={channelTitle} />}
      </ChannelThumbnailWrap>
      <ChannelText>
        <h5>{channelTitle}</h5>
        <ChannelSubscripber>{channelSubscriberCount} 명</ChannelSubscripber>
      </ChannelText>
    </ChannelThumbnailComponent>
  );
}

const ChannelThumbnailComponent = styled.div`
  display: flex;
  align-items: center;
`;
const ChannelSubscripber = styled.span`
  color: ${props => props.theme.greyColor};
  font-size: ${props => props.theme.smallTextSize};
`;
const ChannelText = styled.div`
  margin-left: 10px;
`;
