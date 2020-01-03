import React, { useState, useEffect } from "react";
import { API_KEY } from "../YOUTUBE_KEY";
import cog from "../asset/cog-solid.svg";
import HomeVideoList from "../Component/HomeVideoList";
import styled from "styled-components";

export default function Home() {
  const [currentRegion, setCurrentRegion] = useState("KR"),
    [popularVideos, setPopularVideos] = useState(null),
    [isConfig, setIsConfig] = useState(false),
    regionList = [
      { regionCode: "KR", countryName: "KOREA" },
      { regionCode: "US", countryName: "USA" },
      { regionCode: "GB", countryName: "ENGLAND" },
      { regionCode: "JP", countryName: "JAPAN" }
    ];

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=id,snippet,contentDetails,statistics&chart=mostPopular&maxResults=6&regionCode=${currentRegion}&key=${API_KEY}`
    )
      .then(response => response.json())
      .then(jsondata => {
        const { items } = jsondata;
        setPopularVideos(items);
      });
  }, [currentRegion]);

  return (
    <Container>
      <HeadingArea>
        <Heading>Most popular videos</Heading>
        <button
          onClick={() => {
            console.log(isConfig);
            setIsConfig(!isConfig);
          }}
        >
          <img src={cog} alt="change region" />
        </button>
      </HeadingArea>
      {isConfig && (
        <RegionList>
          {regionList.map(region => (
            <li
              key={region.regionCode}
              className={currentRegion === region.regionCode ? "current" : ""}
              onClick={() => {
                setCurrentRegion(region.regionCode);
              }}
            >
              {region.countryName}
            </li>
          ))}
        </RegionList>
      )}
      <HomeVideoList videos={popularVideos} />
    </Container>
  );
}

const Container = styled.div`
  width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`;
const Heading = styled.h3`
  color: ${props => props.theme.blackColor};
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`;
const HeadingArea = styled.div`
  margin-bottom: 21px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  button {
    background-color: transparent;
    display: inline-block;
    border: 0;
    text-align: center;
    outline: none;
    cursor: pointer;
    transition: transform 0.3s;
    width: 40px;
    &:hover {
      transform: rotate(180deg);
    }
    img {
      width: 100%;
    }
  }
`;
const RegionList = styled.ul`
  background-color: #fff;
  display: flex;
  border-radius: ${props => props.theme.borderRadius};
  overflow: hidden;
  border: 1px solid ${props => props.theme.borderGreyColor};
  margin-bottom: 20px;
  li {
    text-align: center;
    flex: 1;
    line-height: 40px;
    font-size: 18px;
    color: ${props => props.theme.blackColor}
    cursor: pointer;
    border-right: 1px solid ${props => props.theme.borderGreyColor};
    &.current {
      background-color: ${props => props.theme.pointColor};
      color: #fff;
    }
    &:last-child {
      border-right: 0;
    }
  }
`;
