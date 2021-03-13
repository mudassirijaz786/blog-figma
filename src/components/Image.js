import React from "react";

function Image({ src, alt, style }) {
  return <img src={src} alt={alt} className={style} />;
}

export default Image;
