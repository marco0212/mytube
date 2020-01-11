import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { YOUTUBE_API_KEY } from "../API_KEY";
import WatchAside from "../Component/WatchAside";
import WatchMain from "../Component/WatchMain";

export default function Watch(props) {
  const { match, saveWatchLaterItem } = props,
    id = match.params.id,
    [watchVideo, setWatchVideo] = useState(null),
    [relateVideos, setRelateVideos] = useState(null);

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${id}&key=${YOUTUBE_API_KEY}`
    )
      .then(response => response.json())
      .then(jsondata => {
        setWatchVideo(jsondata.items[0]);
      });

    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${id}&type=video&key=${YOUTUBE_API_KEY}`
    )
      .then(response => response.json())
      .then(jsondata => {
        setRelateVideos(jsondata.items);
      });
  }, [id]);

  return (
    <Container>
      <WatchMain
        watchVideo={watchVideo}
        saveWatchLaterItem={saveWatchLaterItem}
      />
      <WatchAside relateVideos={relateVideos} />
    </Container>
  );
}
const Container = styled.div`
  width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 250px;
  grid-gap: 30px;
`;
