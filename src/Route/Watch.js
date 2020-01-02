import React, { useState, useEffect } from "react";
import { API_KEY } from "../YOUTUBE_KEY";
import {
  Container,
  GridContainer,
  SectionBox,
  VideoSnippet,
  SnippetDescriptionArea
} from "../style/styledComponents";
import Loading from "../Component/Loading";
import EmbedResiponsive from "../Component/EmbedResiponsive";
import SnippetHeader from "../Component/SnippetHeader";
import ChannelComponent from "../Component/ChannelComponent";
import RelateVideoList from "../Component/RelateVideoList";
import styled from "styled-components";

export default function Watch(props) {
  const {
    match: {
      params: { id }
    }
  } = props;
  const [isLoading, setIsLoading] = useState(true);
  const [videoData, setVideoData] = useState(null);

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=id,snippet,statistics&id=${id}&key=${API_KEY}`
    )
      .then(response => response.json())
      .then(jsonData => {
        setVideoData(jsonData.items[0]);
        setIsLoading(false);
        alert("Watch data is fetched");
      });
  }, []);
  return isLoading ? (
    <Loading />
  ) : (
    <Container>
      <GridContainer route={"watch"}>
        <SectionBox column={[1, 4]} row="1">
          <EmbedResiponsive id={videoData.id} />
          <VideoSnippet>
            <SnippetHeader
              title={videoData.snippet.title}
              viewCount={videoData.statistics.viewCount}
              publishedAt={videoData.snippet.publishedAt}
              likeCount={videoData.statistics.likeCount}
              dislikeCount={videoData.statistics.dislikeCount}
            />
            <SnippetTail>
              <ChannelComponent channelId={videoData.snippet.channelId} />
              <button>Subscribe</button>
            </SnippetTail>
            <SnippetDescriptionArea>
              <p>{videoData.snippet.description}</p>
            </SnippetDescriptionArea>
          </VideoSnippet>
        </SectionBox>
        <RelateVideoList />
      </GridContainer>
    </Container>
  );
}
const SnippetTail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  button {
    display: inline-block;
    background-color: rgb(255, 41, 5);
    color: #fff;
    border: 0;
    height: 35px;
    font-weight: bold;
    line-height: 35px;
    padding: 0 15px;
    border-radius: 2px;
    font-size: 0.9rem;
  }
`;
