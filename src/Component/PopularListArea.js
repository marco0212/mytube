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
    <SectionBox column={[1, 4]} row={[1, 3]}>
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
