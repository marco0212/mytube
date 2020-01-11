import React, { useEffect } from "react";
import styled from "styled-components";
import RowVideoList from "../Component/RowVideoList";

export default function WatchLater(props) {
  const { watchLaterVideos, setActiveMenu, removeWatchLaterItem } = props;

  useEffect(() => {
    setActiveMenu(false);
  });

  return (
    <Container>
      <Heading>Watch Later</Heading>
      <RowVideoList
        videos={watchLaterVideos}
        removeWatchLaterItem={removeWatchLaterItem}
      />
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
