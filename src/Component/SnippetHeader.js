import React from "react";
import {
  SnippetHeader,
  HeaderTitleArea,
  VideoTitle,
  HeaderLikeArea
} from "../style/styledComponents";
import { timeTransformer } from "../functions";

export default function Header(props) {
  const { title, viewCount, publishedAt, likeCount, dislikeCount } = props;
  return (
    <SnippetHeader>
      <HeaderTitleArea>
        <VideoTitle>{title}</VideoTitle>
        <ul>
          <li>VIEWS {viewCount}</li>
          <li>{timeTransformer(publishedAt)}</li>
        </ul>
      </HeaderTitleArea>
      <HeaderLikeArea>
        <ul>
          <li>Thumb's up : {likeCount}</li>
          <li>Thumb's down : {dislikeCount}</li>
        </ul>
      </HeaderLikeArea>
    </SnippetHeader>
  );
}
