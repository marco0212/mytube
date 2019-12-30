import React, { useState } from "react";
import styled from "styled-components";

export default function RegionList({ allRegions, setRegion }) {
  const [editMode, setEditMode] = useState(false);

  function clickHandler(regionCode) {
    return () => {
      if (editMode) {
        setRegion(regionCode);
        setEditMode(false);
      } else {
        setEditMode(true);
      }
    };
  }

  return (
    <RegionButtonWrap>
      {allRegions.map(regionCode => (
        <li key={regionCode}>
          <RegionButton onClick={clickHandler(regionCode)} code={regionCode}>
            {regionCode}
          </RegionButton>
        </li>
      ))}
    </RegionButtonWrap>
  );
}

const RegionButtonWrap = styled.ul`
  display: flex;
  li {
    margin-left: 5px;
  }
`;
const RegionButton = styled.button`
  width: 50px;
  height: 50px;
  border: 0;
  border-radius: 50%;
  background-color: ${props => {
    switch (props.code) {
      case "KR":
        return "red";
      case "US":
        return "blue";
      case "GB":
        return "yellow";
      case "ES":
        return "orange";
      case "IT":
        return "skyblue";
      case "JP":
        return "lime";
      default:
        return "black";
    }
  }};
`;
