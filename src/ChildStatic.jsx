import React, { memo } from "react";
// memo is useful for child component that has no need to render
// for example, as a child component which getting static value or nothing from its parent
// but if it is getting dynamic value from its parent, it renders anyway.

const ChildStatic = ({ staticValue, obj, func }) => {
  console.log("ChildStatic");
  return (
    <div
      style={{
        backgroundColor: "blueviolet",
        padding: "10px",
        marginTop: "20px",
      }}
    >
      <h1>Child</h1>
      <h2>Static: {staticValue}</h2>
      <h2>Static Obj value: {obj?.name}</h2>
      <h2>Static Func value: {func("hi, i am arguement")}</h2>
    </div>
  );
};

export default memo(ChildStatic);
