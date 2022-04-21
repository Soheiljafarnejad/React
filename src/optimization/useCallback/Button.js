import React from "react";
const Button = ({ title, onClick }) => {
  console.log("Button -", title);
  return <button onClick={onClick}>{title}</button>;
};

export default React.memo(Button);
