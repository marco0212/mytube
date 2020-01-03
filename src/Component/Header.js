import React from "react";
import styled from "styled-components";
import Logo from "../asset/logo.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <HeaderWrap>
      <Container>
        <h1>
          <Link to="/">
            <img src={Logo} alt="MYTUBE" />
            MyTube
          </Link>
        </h1>
        <p>
          <input placeholder="Search videos" />
        </p>
      </Container>
    </HeaderWrap>
  );
}

const HeaderWrap = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  border: 1px solid ${props => props.theme.borderGreyColor};
  background-color: rgba(255, 255, 255, 0.99);
  padding: 15px 0;
`;
const Container = styled.div`
  width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    height: 30px;
    margin-right: 5px;
  }
  a {
    display: flex;
    align-items: center;
    color: ${props => props.theme.blackColor};
    font-size: 28px;
    font-weight: bold;
  }
  p {
    border: 1px solid ${props => props.theme.greyColor};
    border-radius: ${props => props.theme.borderRadius};
    padding: 0 15px;
    input {
      line-height: 25px;
      font-size: 1em;
      color: ${props => props.theme.greyColor};
      border: 0;
      width: 150px;
    }
  }
`;
