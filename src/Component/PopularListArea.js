import React from "react";
import VideoBox from "./VideoBox";
import RegionList from "./RegionList";
import { Container } from "../style/styledComponents";
import styled from "styled-components";

export default function PopularListArea({ videos, allRegions, setRegion }) {
  return (
    <Container>
      <SectionBox>
        <ListHeader>
          <SectionTitle>Recomeneded</SectionTitle>
          <RegionList allRegions={allRegions} setRegion={setRegion} />
        </ListHeader>
        <VideoList>
          {videos.map(video => (
            <VideoBox video={video} key={video.id} />
          ))}
        </VideoList>
      </SectionBox>
    </Container>
  );
}

const SectionBox = styled.section`
  background-color: #fff;
  box-shadow: ${props => props.theme.boxShadow};
`;
const ListHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid ${props => props.theme.lightGreyColor};
`;
const SectionTitle = styled.h3`
  font-size: ${props => props.theme.bigTextSize};
  font-weight: 500;
  line-height: 35px;
`;
const VideoList = styled.ul`
  padding: 30px 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px;
`;
