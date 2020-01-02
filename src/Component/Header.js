import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  HeaderWrap,
  HeaderInner,
  Logo,
  InputWrap
} from "../style/styledComponents";
import logo from "../asset/logo.svg";

export default function Header() {
  return (
    <Fragment>
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
              <InputWrap>
                <input placeholder="Search Videos" />
                <button>
                  <span role="img" aria-label="img">
                    🔍
                  </span>
                </button>
              </InputWrap>
            </form>
          </HeaderInner>
        </Container>
      </HeaderWrap>
    </Fragment>
  );
}
