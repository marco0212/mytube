import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function HomeVideoItem({ id, title, thumbnail }) {
  return (
    <div>
      <Link to={`/watch/${id}`}>
        <Thumbnail thumbnail={thumbnail} />
      </Link>
      <Link to={`/watch/${id}`}>{title}</Link>
    </div>
  );
}

const Thumbnail = styled.div`
  background: url(${props => props.thumbnail}) no-repeat center center / cover;
  width: 100%;
  padding-top: 56%;
`;
