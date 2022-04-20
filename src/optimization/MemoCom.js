import React from "react";
const MemoCom = (props) => {
  console.log("memoCom");
  return <h2>{props.count}</h2>;
};

export default React.memo(MemoCom);
