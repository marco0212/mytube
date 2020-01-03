import React, { useState, useEffect } from "react";
import { API_KEY } from "../YOUTUBE_KEY";
import HomeVideoList from "../Component/HomeVideoList";
import styled from "styled-components";

export default function Home() {
  const [region] = useState("KR"),
    [popularVideos, setPopularVideos] = useState(null);

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=id,snippet,contentDetails&chart=mostPopular&maxResults=8&regionCode=${region}&key=${API_KEY}`
    )
      .then(response => response.json())
      .then(jsondata => {
        const { items } = jsondata;
        setPopularVideos(items);
      });
  }, [region]);

  return (
    <Container>
      <Heading>Recommended</Heading>
      <HomeVideoList videos={popularVideos} />
    </Container>
  );
}

const Container = styled.div`
  width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`;
const Heading = styled.h3`
  color: ${props => props.theme.blackColor};
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 21px;
`;
