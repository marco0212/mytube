import React from "react";
import VideoBox from "./VideoBox";
import RegionList from "./RegionList";
import {
  SectionBox,
  SectionHeader,
  SectionTitle,
  VideoList
} from "../style/styledComponents";

export default function PopularListArea({ videos, allRegions, setRegion }) {
  return (
    <SectionBox start="1" end="4">
      <SectionHeader>
        <SectionTitle>Recomeneded</SectionTitle>
        <RegionList allRegions={allRegions} setRegion={setRegion} />
      </SectionHeader>
      <VideoList>
        {videos.map(video => (
          <VideoBox video={video} key={video.id} />
        ))}
      </VideoList>
    </SectionBox>
  );
}
