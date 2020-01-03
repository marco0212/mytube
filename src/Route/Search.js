import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { API_KEY } from "../YOUTUBE_KEY";
import SearchVideoList from "../Component/SearchVideoList";

export default function Watch(props) {
  const keyword = props.match.params.keyword;
  const [searchedVideo, setSearchedVideo] = useState(null);

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${keyword}&type=video&key=${API_KEY}`
    )
      .then(response => response.json())
      .then(jsondata => {
        setSearchedVideo(jsondata.items);
      });
  }, [keyword]);
  return (
    <Container>
      <SearchVideoList videos={searchedVideo} />
    </Container>
  );
}
const Container = styled.div`
  width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  display: grid;
  grid-gap: 30px;
`;
