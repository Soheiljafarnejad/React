import React from "react";

const Count = ({ title, count }) => {
  console.log("Count -", title);
  return (
    <p>
      {title}-{count}
    </p>
  );
};

export default React.memo(Count);
