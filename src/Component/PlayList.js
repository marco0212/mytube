import React from "react";
import {
  SectionBox,
  SectionHeader,
  SectionTitle
} from "../style/styledComponents";

export default function PlayList() {
  return (
    <SectionBox column="4" row="1">
      <SectionHeader>
        <SectionTitle>Play List</SectionTitle>
      </SectionHeader>
    </SectionBox>
  );
}
