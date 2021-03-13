import React from "react";
import Title from "../components/Title";
import Image from "../components/Image";
import Content from "./Content";
import { saladImage, topTitle } from "../data/constant";

function BlogArticle() {
  return (
    <React.Fragment>
      <Title description={topTitle.description} style={topTitle.style} />
      <Image
        src={saladImage.src}
        alt={saladImage.alt}
        style={saladImage.style}
      />
      <Content />
    </React.Fragment>
  );
}

export default BlogArticle;
