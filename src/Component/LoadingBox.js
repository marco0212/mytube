import React from "react";
import styled from "styled-components";

export default function LoadingBox({ channelThumbnail, search }) {
  return (
    <Box search={search}>
      <Thumbnail />
      <BoxText>
        {channelThumbnail && <div className="thumbnail" />}
        <div className="text-wrap">
          <div className="text" />
          <div className="text" />
          <div className="text" />
        </div>
      </BoxText>
    </Box>
  );
}

const Box = styled.div`
  ${props => {
    return props.search
      ? `display:grid;
         grid-template-columns: 250px 1fr;
         grid-gap: 30px;`
      : props.theme.whiteBox;
  }}
  overflow: hidden;
`;
const Thumbnail = styled.div`
  background-color: #ebebeb;
  width: 100%;
  padding-top: 56%;
`;
const BoxText = styled.div`
  padding: 10px;
  display: flex;
  .thumbnail {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
    background-color: #ebebeb;
  }
  .text-wrap {
    width: calc(100% - 50px);
    .text {
      padding-top: 27px;
      display: block;
      width: 100%;
      background-color: #ebebeb;
      margin-bottom: 5px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;
