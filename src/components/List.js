import React from "react";

function List({ bullets }) {
  return (
    <React.Fragment>
      <ul className="bullets">
        {bullets.map((list, index) => {
          return <li key={index}>{list}</li>;
        })}
      </ul>
    </React.Fragment>
  );
}

export default List;
