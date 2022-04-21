import { useId } from "react";

const FormUseId = () => {
  const option = [
    { name: "FirsName", type: "text" },
    { name: "LastName", type: "text" },
    { name: "Email", type: "email" },
    { name: "Phone", type: "tel" },
    { name: "Age", type: "number" },
  ];
  const id = useId();
  console.log(id);
  return (
    <section>
      {option.map((item) => {
        return (
          <div>
            <label htmlFor={`${id}-${item.name}`}>{item.name}</label>
            <input id={`${id}-${item.name}`} type={item.type} name={item.name} />
          </div>
        );
      })}
    </section>
  );
};

export default FormUseId;
