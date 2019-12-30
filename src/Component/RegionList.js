import React from "react";
import styled from "styled-components";

export default function RegionList({ allRegions, setRegion }) {
  function clickHandler(regionCode) {
    return () => {
      setRegion(regionCode);
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
`;
const RegionButton = styled.button`
  border: 0;
  width: 50px;
  height: 50px;
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
