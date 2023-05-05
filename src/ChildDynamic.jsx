import React, { memo } from "react";
// memo is useful when parent renders and child component has no need to render
// for example, as a child component which getting static value or nothing from its parent
// but if it is getting dynamic value from its parent, it renders anyway.
// it means: no need to use memo if it is dynamic values

const ChildDynmic = () => {
  console.log("ChildDynmic");
  return (
    <div
      style={{
        backgroundColor: "red",
        padding: "10px",
        marginTop: "20px",
      }}
    >
      <h1>Child Dynmic</h1>
      <h2>Dynamic:</h2>
    </div>
  );
};

export default ChildDynmic;
