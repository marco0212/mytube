import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import styled, { keyframes } from "styled-components";

export default function Notification({ notification }) {
  return (
    <NotificationBox>
      {notification.message}
      {notification.addLink && (
        <Link to="/watchlater">
          <FontAwesomeIcon icon={faExternalLinkAlt} />
        </Link>
      )}
    </NotificationBox>
  );
}

const slideUp = keyframes`
0% {
  opacity: 0;
  bottom: 0;
}
10% {
  opacity: 1;
  bottom: 20px;
}
90% {
  bottom: 20px;
}
100% {
  bottom: -60px;
}
`;
const NotificationBox = styled.span`
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 20px;
  left: 20px;
  font-size: 14px;
  line-height: 40px;
  padding: 0 30px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.8);
  animation: ${slideUp} 4s forwards;
  a {
    margin-left: 10px;
  }
`;
