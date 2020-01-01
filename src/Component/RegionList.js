import React from "react";
import { RegionButtonWrap, RegionButton } from "../style/styledComponents";

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
