import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../style/styledComponents";
import logo from "../asset/logo.svg";

export default function Header() {
  return (
    <HeaderWrap>
      <Container>
        <HeaderInner>
          <h1>
            <Link to="/">
              <Logo>
                <img src={logo} alt="MyTube" />
                MyTube
              </Logo>
            </Link>
          </h1>
          <form>
            <p>
              <input placeholder="Search Videos" />
              <button>Search</button>
            </p>
          </form>
        </HeaderInner>
      </Container>
    </HeaderWrap>
  );
}

const HeaderWrap = styled.header`
  background-color: #fff;
  padding: 10px 0;
`;
const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 30px;
  font-weight: 700;
  line-height: 50px;
  letter-spacing: -2px;
  img {
    max-width: 40px;
    margin-right: 5px;
  }
`;
