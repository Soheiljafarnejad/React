import { useState } from "react";

const Batching = () => {
  const [count, setCount] = useState(0);
  const [bool, setBool] = useState(false);

  const syncHandler = () => {
    setCount((prevCount) => prevCount + 1);
    setBool(!bool);
    // React v17 will only re-render once at the end (that's batching)
    // React v18 will only re-render once at the end (that's batching)
  };

  const asyncHandler = () => {
    setTimeout(() => {
      setCount((prevCount) => prevCount + 1);
      setBool(!bool);
    }, 500);
    // React v17 will render twice, once for each state update (no batching)
    // React v18 will only re-render once at the end (that's batching)
  };

  console.log("render");
  return (
    <section>
      <p>
        {count} - {bool ? "odd" : "even"}
      </p>
      <button onClick={syncHandler}>sync Handler</button>
      <button onClick={asyncHandler}>async Handler</button>
    </section>
  );
};

export default Batching;
