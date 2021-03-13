import React from "react";
import Image from "../components/Image";
import List from "../components/List";
import Paragraph from "../components/Paragraph";
import SpecialParagraph from "../components/SpecialParagraph";
import Title from "../components/Title";
import BlogAction from "./BlogAction";
import {
  placeholderImage,
  withAllRumors,
  bulletArray,
  theWordOf,
  blogAction,
  midTitle,
} from "../data/constant";

function Content() {
  return (
    <div className="content-container">
      <BlogAction blogActionsData={blogAction} />
      <div className="paragraph-content">
        <Paragraph description={theWordOf} />
        <Paragraph description={withAllRumors} />
        <Title description={midTitle.description} style={midTitle.style} />
        <SpecialParagraph />
        <Image
          src={placeholderImage.src}
          alt={placeholderImage.alt}
          style={placeholderImage.style}
        />
        <List bullets={bulletArray} />
      </div>
      <div />
    </div>
  );
}

export default Content;
