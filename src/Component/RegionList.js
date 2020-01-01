import React from "react";
import styled from "styled-components";

export default function RegionList({ allRegions, setRegion }) {
  return (
    <RegionButtonWrap>
      {allRegions.map(regionCode => (
        <li key={regionCode}>
          <RegionButton
            onClick={() => {
              setRegion(regionCode);
            }}
            code={regionCode}
          >
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
  width: 35px;
  height: 35px;
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
