import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderWrap = styled.header`
  z-index: 11;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.99);
  padding: 15px 0;
  box-shadow: 0.5rem 0 0.5rem rgba(0, 0, 0, 0.1);
`;
export const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  form {
    margin-left: auto;
  }
`;
export const Logo = styled.div`
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
export const InputWrap = styled.p`
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
export const Container = styled.div`
  padding: 0 30px;
  margin: 0 auto;
  min-width: 1200px;
`;
export const GridContainer = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(4, 1fr);
`;
export const SectionBox = styled.section`
  background-color: #fff;
  box-shadow: ${props => props.theme.boxShadow};
  ${props => {
    if (Array.isArray(props.column)) {
      return `grid-column-start : ${props.column[0]}; grid-column-end : ${props.column[1]}`;
    } else {
      return `grid-column : ${props.column}`;
    }
  }}
  ${props => {
    if (Array.isArray(props.row)) {
      return `grid-row-start : ${props.row[0]}; grid-row-end : ${props.row[1]}`;
    } else {
      return `grid-row : ${props.row}`;
    }
  }}
`;
export const SectionHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid ${props => props.theme.lightGreyColor};
`;
export const SectionTitle = styled.h3`
  font-size: ${props => props.theme.bigTextSize};
  font-weight: 500;
  line-height: 30px;
`;
export const VideoList = styled.ul`
  padding: 30px 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px;
`;

/** Video Box */
export const ThumbnailLink = styled(Link)`
  display: block;
  width: 100%;
  background: #000 url(${props => props.src}) no-repeat center center /
    calc(100% + 30px);
  padding-top: 65%;
  margin-bottom: 15px;
`;
export const TextArea = styled.div`
  position: relative;
  padding: 0 5px;
`;
export const ChannelThumbnailWrap = styled.div`
  ${props =>
    props.home &&
    `position: absolute;
     top: -40px;
     right: 10px;`}
  border-radius: 50%;
  overflow: hidden;
  width: 50px;
  height: 50px;
  border: 3px solid #fff;
  background-color: ${props => props.theme.greyColor};
  img {
    width: 100%;
    height: 100%;
  }
`;
export const VideoTitle = styled.h5`
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.4;
  margin-bottom: 15px;
  letter-spacing: -1px;
`;
export const ChannelTitle = styled.strong`
  display: block;
  color: ${props => props.theme.greyColor};
  font-size: ${props => props.theme.smallTextSize};
  font-weight: bold;
  line-height: 1;
  margin-bottom: 15px;
  max-width: calc(100% - 65px);
`;
export const VideoInfo = styled.span`
  color: ${props => props.theme.greyColor};
  font-size: ${props => props.theme.smallTextSize};
  line-height: 1;
`;

/** Region */
export const RegionButtonWrap = styled.ul`
  display: flex;
  li {
    margin-left: 5px;
  }
`;
export const RegionButton = styled.button`
  width: 30px;
  height: 30px;
  border: 0;
  border-radius: 5px;
  background-color: ${props => {
    switch (props.code) {
      case "KR":
        return "red";
      case "US":
        return "blue";
      case "GB":
        return "yellow";
      case "ES":
        return "orange";
      case "IT":
        return "skyblue";
      case "JP":
        return "lime";
      default:
        return "black";
    }
  }};
`;

/** Watch route component */
export const EmbedResiponsiveParent = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56%;
`;
export const EmbedResiponsiveChild = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
export const VideoSnippet = styled.div`
  padding: 30px;
`;
export const SnippetHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;
export const HeaderTitleArea = styled.div`
  ul {
    display: flex;
    font-weight: bold;
    color: ${props => props.theme.greyColor};
    li {
      margin-left: 10px;
      &:first-child {
        margin-left: 0;
      }
    }
  }
`;
export const HeaderLikeArea = styled.div``;
export const SnippetDescriptionArea = styled.div`
  p {
    white-space: pre-wrap;
    line-height: 21px;
  }
`;
