import React from "react";
import styled from "styled-components";
import SearchVideoList from "../Component/SearchVideoList";

export default function WatchLater({ watchLaterVideos }) {
  return (
    <Container>
      <Heading>Watch Later</Heading>
      <SearchVideoList videos={watchLaterVideos} />
    </Container>
  );
}

const Container = styled.div`
  width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  display: grid;
  grid-gap: 30px;
`;
const Heading = styled.h3`
  color: ${props => props.theme.blackColor};
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`;
