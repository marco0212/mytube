import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../asset/logo.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClock, faHome } from "@fortawesome/free-solid-svg-icons";

export default function Header(props) {
  const { history, activeMenu, setActiveMenu } = props,
    [inputValue, setInputValue] = useState("");

  function inputSubmitHandler(e) {
    if (e.which === 13) {
      if (!inputValue) return false;
      setInputValue("");
      history.push(`/search/${inputValue}`);
    }
  }
  function inputChangeHandler(e) {
    setInputValue(e.target.value);
  }

  return (
    <>
      <HeaderWrap>
        <Container>
          <button onClick={setActiveMenu.bind(null, !activeMenu)}>
            <FontAwesomeIcon icon={faBars} />
          </button>
          <h1>
            <Link to="/">
              <img src={Logo} alt="MYTUBE" />
              MyTube
            </Link>
          </h1>
          <p>
            <input
              placeholder="Search videos"
              onKeyDown={inputSubmitHandler}
              onChange={inputChangeHandler}
              value={inputValue}
            />
          </p>
        </Container>
      </HeaderWrap>
      <Aside className={activeMenu && "active"}>
        <LogoArea>
          <h1>
            <img src={Logo} alt="MYTUBE" />
            MyTube
          </h1>
        </LogoArea>
        <MenuArea>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faHome} /> Home
            </Link>
          </li>
          <li>
            <Link to="/watchlater">
              <FontAwesomeIcon icon={faClock} /> Watch Later
            </Link>
          </li>
        </MenuArea>
        <CopyArea>
          <p>&copy; 2020 MyTube</p>
        </CopyArea>
      </Aside>
      <Overlay onClick={setActiveMenu.bind(null, !activeMenu)} />
    </>
  );
}

const HeaderWrap = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
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
  button {
    background-color: transparent;
    border: 0;
    cursor: pointer;
    outline: none;
    svg {
      font-size: 20px;
    }
  }
  h1 {
    margin-left: 10px;
    margin-right: auto;
  }
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
      background-color: transparent;
      height: 30px;
      line-height: 30px;
      font-size: 16px;
      color: ${props => props.theme.greyColor};
      border: 0;
      width: 150px;
    }
  }
`;
const Aside = styled.aside`
  padding: 15px 30px;
  position: fixed;
  display: flex;
  z-index: 11;
  background-color: #fff;
  flex-direction: column;
  transition: all 0.3s;
  top: 0;
  left: -300px;
  bottom: 0;
  width: 300px;
  &.active {
    left: 0;
  }
  &.active + span {
    display: block;
  }
  h1 {
    display: flex;
    align-items: center;
    color: ${props => props.theme.blackColor};
    font-size: 28px;
    font-weight: bold;
  }
  img {
    height: 30px;
    margin-right: 5px;
  }
`;
const LogoArea = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;
const MenuArea = styled.ul`
  padding: 40px 0;
  li {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
    a {
      display: flex;
      align-items: center;
      font-size: 17px;
      color: #444;
      font-weight: 600;
      svg {
        font-weight: 400;
        color: #999;
        margin-right: 15px;
      }
    }
  }
`;
const CopyArea = styled.div`
  margin-top: auto;
`;
const Overlay = styled.span`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;
