import { useState, useRef, useEffect } from "react";

const UseRef = () => {
  const [now, setNow] = useState("");
  const before = useRef();

  useEffect(() => {
    // setBefore(now);
    before.current = now;
  }, [now]);

  return (
    <div>
      <input value={now} onChange={(e) => setNow(e.target.value)} />
      <p>{`now Value :${now}`}</p>
      <p>{`before Value: ${before.current}`}</p>
    </div>
  );
};

export default UseRef;
