import React, { useCallback, useMemo, useState } from "react";
import ChildStatic from "./ChildStatic";
import ChildDynamic from "./ChildDynamic";
const App = () => {
  console.log("parent");
  const [counter, setCounter] = useState(0);

  const obj = useMemo(() => {
    return { name: "static as non-primitive" };
  }, []);

  const func = useCallback((param) => {
    return param;
  }, []);

  return (
    <div>
      <h1>Parent: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>plus</button>
      <ChildStatic staticValue={"static as primitive"} obj={obj} func={func} />
      <ChildDynamic counter={counter} />
    </div>
  );
};

export default App;
