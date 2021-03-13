import React from "react";
import Button from "../components/Button";

function BlogAction({ blogActionsData }) {
  return (
    <div className={blogActionsData.style}>
      <div className="date-name">
        {blogActionsData.name}
        <br />
        {blogActionsData.date}
      </div>
      <div className="button-wrapper">
        <Button title={blogActionsData.categoryName} />
        <Button title={blogActionsData.keywordName} />
      </div>
    </div>
  );
}

export default BlogAction;
