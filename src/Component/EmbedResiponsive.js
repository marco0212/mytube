import React from "react";
import {
  EmbedResiponsiveParent,
  EmbedResiponsiveChild
} from "../style/styledComponents";

export default function EmbedResiponsive({ id }) {
  return (
    <EmbedResiponsiveParent>
      <EmbedResiponsiveChild
        src={`https://www.youtube.com/embed/${id}`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </EmbedResiponsiveParent>
  );
}
