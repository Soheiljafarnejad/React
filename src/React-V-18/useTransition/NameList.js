import { useState, useTransition } from "react";

const NameList = ({ names }) => {
  const [query, setQuery] = useState("");
  const [highlight, setHighlight] = useState("");

  const [isPending, startTransition] = useTransition();

  const changeHandler = (e) => {
    setQuery(e.target.value);
    startTransition(() => {
      setHighlight(e.target.value);
    });
  };

  return (
    <section style={{ opacity: isPending ? 0.2 : 1 }}>
      <input type="text" value={query} onChange={changeHandler} />
      {names.map((item, index) => {
        return <NameItem key={index} name={item} highlight={highlight} />;
      })}
    </section>
  );
};

export default NameList;

const NameItem = ({ name, highlight }) => {
  const index = name.toLowerCase().indexOf(highlight.toLowerCase());
  if (index === -1) return <p>{name}</p>;
  return (
    <p>
      <span>{name.slice(0, index)}</span>
      <span style={{ backgroundColor: "orange" }}>
        {name.slice(index, index + highlight.length)}
      </span>
      <span>{name.slice(index + highlight.length)}</span>
    </p>
  );
};
