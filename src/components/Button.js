import React from "react";

function Button({ title }) {
  return (
    <React.Fragment>
      <button className="category-button">{title}</button>
    </React.Fragment>
  );
}

export default Button;
