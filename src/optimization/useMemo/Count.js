import { useState } from "react";

const Count = () => {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);

  const isEven = () => {
    let i = 0;
    while (i < 2000000000) i++;
    return countA % 2 === 0;
  };

  return (
    <section>
      <h1>useMemo Demo</h1>
      <div>
        <span>{countA}</span>
        <button onClick={() => setCountA(countA + 1)}>one</button>
        <span>{isEven() ? "even" : "odd"}</span>
      </div>
      <div>
        <span>{countB}</span>
        <button onClick={() => setCountB(countB + 1)}>one</button>
      </div>
    </section>
  );
};

export default Count;
