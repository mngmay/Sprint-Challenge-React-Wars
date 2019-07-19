import React from "react";

const Buttons = props => {
  const { nextPage, prevPage } = props;

  return (
    <div>
      <button onClick={prevPage}>Previous Page</button>
      <button onClick={nextPage}>Next Page</button>
    </div>
  );
};
export default Buttons;
