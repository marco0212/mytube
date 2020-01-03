import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function VideoBox({ id, title, thumbnail }) {
  return (
    <Box>
      <Link to={`/watch/${id}`}>
        <Thumbnail thumbnail={thumbnail} />
      </Link>
      <BoxText>
        <Link to={`/watch/${id}`}>{title}</Link>
      </BoxText>
    </Box>
  );
}

const Box = styled.div`
  ${props => props.theme.whiteBox}
  overflow: hidden;
`;
const Thumbnail = styled.div`
  background: url(${props => props.thumbnail}) no-repeat center center / cover;
  width: 100%;
  padding-top: 56%;
`;
const BoxText = styled.div`
  position: relative;
  padding: 10px;
  a {
    display: block;
    max-height: 42px;
    overflow: hidden;
    color: ${props => props.theme.lightBlackColor};
    font-weight: bold;
  }
`;
