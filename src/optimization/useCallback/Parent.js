import { useCallback, useState } from "react";
import Button from "./Button";
import Count from "./Count";
import Title from "./Title";

const Parent = () => {
  const [age, setAge] = useState(0);
  const [score, setScore] = useState(0);

  const ageHandler = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const sortHandler = useCallback(() => {
    setScore(score + 1);
  }, [score]);

  return (
    <section>
      <Title title="useCallback Demo" />
      <Count title="age" count={age} />
      <Button title="age" onClick={ageHandler} />
      <Count title="score" count={score} />
      <Button title="score" onClick={sortHandler} />
    </section>
  );
};

export default Parent;
