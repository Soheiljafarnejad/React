import { useState } from "react";
import { useProductAction } from "../../Providers/PrevuesContext";
import SelectCom from "../../common/Select/SelectCom";

import style from "./FilterSize.module.css";

const Filtered = () => {
  const [sort, setSort] = useState({ value: "Low" });

  const dispatch = useProductAction();

  const sizeOptions = [
    { value: "All", label: "All" },
    { value: "XS", label: "XS" },
    { value: "S", label: "S" },
    { value: "M", label: "M" },
    { value: "L", label: "L" },
    { value: "XL", label: "XL" },
    { value: "XXL", label: "XXL" },
  ];

  const sortOptions = [
    { value: "Low", label: "Low" },
    { value: "High", label: "High" },
  ];

  const sizeHandler = (e) => {
    dispatch({ type: "size", event: e });
    dispatch({ type: "sort", event: sort });
  };

  const sortHandler = (e) => {
    dispatch({ type: "sort", event: e });
    setSort({ value: e.value });
  };

  return (
    <div className={style.filterContainer}>
      <SelectCom
        title="Order by:"
        onChange={sizeHandler}
        options={sizeOptions}
        defaultValue={sizeOptions[0]}
      />
      <SelectCom
        title="Sort by:"
        onChange={sortHandler}
        options={sortOptions}
      />
    </div>
  );
};

export default Filtered;
