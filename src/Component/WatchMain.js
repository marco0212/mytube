import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { publishedTransformer, viewCountAddComma } from "../functions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import LoadingBox from "./LoadingBox";

export default function WatchMain({ watchVideo, saveWatchLaterItem }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (watchVideo) setIsLoading(false);
  }, [watchVideo]);

  return isLoading ? (
    <div>
      <LoadingBox watch />
    </div>
  ) : (
    <Main>
      <div>
        <EmbedResponsiveParent>
          <iframe
            title={watchVideo.snippet.title}
            src={`https://www.youtube.com/embed/${watchVideo.id}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </EmbedResponsiveParent>
        <WatchVideoTextArea>
          <div>
            <VideoTitle>{watchVideo.snippet.title}</VideoTitle>
            <VideoUtilArea>
              <span>
                {`조회수 ${viewCountAddComma(
                  watchVideo.statistics.viewCount
                )} 회 • ${publishedTransformer(
                  watchVideo.snippet.publishedAt
                )}`}
              </span>
              <button onClick={saveWatchLaterItem.bind(null, watchVideo)}>
                <FontAwesomeIcon icon={faList} />
                보관함에 저장
              </button>
            </VideoUtilArea>
          </div>
          <div>
            <p>{watchVideo.snippet.description}</p>
          </div>
        </WatchVideoTextArea>
      </div>
    </Main>
  );
}

const Main = styled.main`
  & > div {
    ${props => props.theme.whiteBox}
    overflow: hidden;
  }
`;
const EmbedResponsiveParent = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56%;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
const WatchVideoTextArea = styled.div`
  padding: 20px;
  & > div:first-child {
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid ${props => props.theme.borderGreyColor};
  }
  p {
    white-space: pre-wrap;
  }
`;
const VideoTitle = styled.h3`
  color: ${props => props.theme.blackColor};
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 10px;
`;
const VideoUtilArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${props => props.theme.lightBlackColor};
  button {
    background-color: ${props => props.theme.pointColor};
    border-radius: ${props => props.theme.borderRadius};
    line-height: 21px;
    overflow: hidden;
    color: #fff;
    display: flex;
    align-items: center;
    border: 0;
    font-size: 14px;
    svg {
      margin-right: 10px;
    }
  }
`;
