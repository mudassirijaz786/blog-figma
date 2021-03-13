import React from "react";

function Title({ description, style }) {
  return (
    <React.Fragment>
      <div className={style}>{description}</div>
    </React.Fragment>
  );
}

export default Title;
