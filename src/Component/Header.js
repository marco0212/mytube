import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../style/styledComponents";
import logo from "../asset/logo.svg";

export default function Header() {
  return (
    <Fragment>
      <HeaderWrap>
        <Container>
          <HeaderInner>
            <form>
              <InputWrap>
                <input placeholder="Search Videos" />
                <button>🔍</button>
              </InputWrap>
            </form>
          </HeaderInner>
        </Container>
      </HeaderWrap>
      <Aside>
        <h1>
          <Link to="/">
            <Logo>
              <img src={logo} alt="MyTube" />
              MyTube
            </Logo>
          </Link>
        </h1>
        <p>&copy; 2020 MyTube</p>
      </Aside>
    </Fragment>
  );
}

const Aside = styled.aside`
  position: fixed;
  width: 250px;
  top: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 1);
  padding: 10px 20px;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  z-index: 10;
  display: flex;
  flex-direction: column;
  p {
    font-size: 0.7rem;
    margin-top: auto;
    color: #9c9c9c;
  }
`;
const HeaderWrap = styled.header`
  z-index: 11;
  position: fixed;
  top: 0;
  left: 250px;
  right: 0;
  background-color: rgba(255, 255, 255, 0.99);
  padding: 15px 0;
  box-shadow: 0.5rem 0 0.5rem rgba(0, 0, 0, 0.1);
`;
const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  form {
    margin-left: auto;
  }
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
const InputWrap = styled.p`
  display: flex;
  border-radius: 25px;
  overflow: hidden;
  border: 2px solid #f1f1f1;
  color: #666;
  font-size: 1rem;
  input {
    color: inherit;
    font-size: inherit;
    padding-left: 20px;
    height: 40px;
    width: 300px;
    border: 0;
    &::placeholder {
      font-style: italic;
    }
  }
  button {
    color: inherit;
    font-size: inherit;
    width: 80px;
    cursor: pointer;
    text-align: center;
    border: 0;
  }
  input:focus,
  button:focus {
    outline: none;
  }
`;
