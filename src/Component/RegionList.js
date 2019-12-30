import React from "react";

export default function RegionList({ allRegions, setRegion }) {
  function clickHandler(regionCode) {
    return () => {
      setRegion(regionCode);
    };
  }
  return (
    <ul>
      {allRegions.map(regionCode => (
        <li key={regionCode}>
          <button onClick={clickHandler(regionCode)}>{regionCode}</button>
        </li>
      ))}
    </ul>
  );
}
