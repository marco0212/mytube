import React, { useState, useEffect } from "react";
import styled from "styled-components";
import RowVideoList from "../Component/RowVideoList";
import { YOUTUBE_API_KEY } from "../API_KEY";

export default function Watch(props) {
  const keyword = props.match.params.keyword,
    [searchedVideo, setSearchedVideo] = useState(null);

  useEffect(() => {
    fetchingSearchVideos(keyword);
  }, [keyword]);

  function fetchingSearchVideos(dependency) {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${dependency}&type=video&key=${YOUTUBE_API_KEY}`
    )
      .then(response => response.json())
      .then(jsondata => {
        setSearchedVideo(jsondata.items);
      });
  }

  return (
    <Container>
      <RowVideoList videos={searchedVideo} />
    </Container>
  );
}
const Container = styled.div`
  width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  display: grid;
  grid-gap: 30px;
`;
