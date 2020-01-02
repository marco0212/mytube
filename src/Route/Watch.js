import React, { useState, useEffect } from "react";
import { API_KEY } from "../YOUTUBE_KEY";
import {
  Container,
  GridContainer,
  SectionBox
} from "../style/styledComponents";
import Loading from "../Component/Loading";

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
        console.log(jsonData);
        setVideoData(jsonData);
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
          asdsa
        </SectionBox>
        <SectionBox column="4" row="1">
          asd
        </SectionBox>
      </GridContainer>
    </Container>
  );
}
