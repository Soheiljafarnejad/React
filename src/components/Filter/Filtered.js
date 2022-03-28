import { useState } from "react";
import SearchCom from "../../common/Filter/SearchCom";
import SelectCom from "../../common/Select/SelectCom";
import { useProductAction } from "../../Providers/PrevuesContext";

import style from "./FilterSize.module.css";

const Filtered = () => {
  const [sort, setSort] = useState({ value: "Low" });
  const [size, setSize] = useState({ value: "All" });

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
    setSize({ value: e.value });
  };

  const sortHandler = (e) => {
    dispatch({ type: "sort", event: e });
    setSort({ value: e.value });
  };

  const searchHandler = (e) => {
    dispatch({ type: "size", event: size });
    dispatch({ type: "search", event: e });
  };

  return (
    <div className={style.filterContainer}>
      <SearchCom placeholder="search from..." onChange={searchHandler} />
      <SelectCom
        title="Order by:"
        onChange={sizeHandler}
        options={sizeOptions}
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
