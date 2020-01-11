import React, { useState, useEffect } from "react";
import { YOUTUBE_API_KEY } from "../API_KEY";
import HomeVideoList from "../Component/HomeVideoList";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";

export default function Home({ setActiveMenu }) {
  const [currentRegion, setCurrentRegion] = useState("KR"),
    [popularVideos, setPopularVideos] = useState(null),
    [token, setToken] = useState(null),
    [isFetching, setIsFetching] = useState(false),
    [isConfig, setIsConfig] = useState(false),
    regionList = [
      { regionCode: "KR", countryName: "KOREA" },
      { regionCode: "US", countryName: "USA" },
      { regionCode: "GB", countryName: "ENGLAND" },
      { regionCode: "JP", countryName: "JAPAN" }
    ];

  useEffect(() => {
    setActiveMenu(false);
    fetchingPopularVideo(currentRegion);
  }, [currentRegion]);

  function fetchingPopularVideo(regionCode) {
    fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=id,snippet,contentDetails,statistics&chart=mostPopular&maxResults=6&regionCode=${regionCode}&key=${YOUTUBE_API_KEY}`
    )
      .then(response => response.json())
      .then(jsondata => {
        const { items, nextPageToken } = jsondata;
        setToken(nextPageToken);
        setPopularVideos(items);
      });
  }

  function fetcingNextPage() {
    setIsFetching(true);
    fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=id,snippet,contentDetails,statistics&chart=mostPopular&maxResults=6&regionCode=${currentRegion}&pageToken=${token}&key=${YOUTUBE_API_KEY}`
    )
      .then(response => response.json())
      .then(jsondata => {
        const { items, nextPageToken } = jsondata;
        setToken(nextPageToken);
        setPopularVideos([...popularVideos, ...items]);
        setIsFetching(false);
      });
  }

  return (
    <Container>
      <HeadingArea>
        <Heading>Most popular videos</Heading>
        <button onClick={setIsConfig.bind(null, !isConfig)}>
          <CogIcon icon={faCog} />
        </button>
      </HeadingArea>
      {isConfig && (
        <RegionList>
          {regionList.map(region => (
            <li
              key={region.regionCode}
              className={currentRegion === region.regionCode ? "current" : ""}
              onClick={setCurrentRegion.bind(null, region.regionCode)}
            >
              {region.countryName}
            </li>
          ))}
        </RegionList>
      )}
      <HomeVideoList videos={popularVideos} />

      {isFetching ? (
        <Loading />
      ) : (
        <MoreVideoButton onClick={fetcingNextPage}>
          {popularVideos ? "More Videos" : "Loading"}
        </MoreVideoButton>
      )}
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
  }
`;
const CogIcon = styled(FontAwesomeIcon)`
  font-size: 20px;
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
const rotate = keyframes`
from {
  transform: rotate(0deg);
}
100% {
  transform: rotate(360deg);
}
`;
const Loading = styled.div`
  margin: 30px auto 0;
  width: 30px;
  height: 30px;
  border: 4px solid ${props => props.theme.pointColor};
  border-right-color: transparent;
  border-radius: 50%;
  animation: ${rotate} 1s infinite;
`;
const MoreVideoButton = styled.button`
  margin-top: 30px;
  ${props => props.theme.whiteBox}
  line-height: 30px;
  display: block;
  width: 100%;
  font-size: 16px;
`;
