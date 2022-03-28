import { createContext, useContext, useReducer } from "react";
import { ProductDate } from "../db/ProductDate";

const ProductContainer = createContext();
const ProductContainerDispatcher = createContext();

const initState = ProductDate;

const reduce = (state, action) => {
  switch (action.type) {
    case "increment": {
      const index = state.findIndex((item) => item.id === action.id);
      const selectItem = { ...state[index] };
      selectItem.quantity++;
      const cloneProduct = [...state];
      cloneProduct[index] = selectItem;
      return cloneProduct;
    }
    case "decrement": {
      const index = state.findIndex((item) => item.id === action.id);
      const selectItem = { ...state[index] };
      selectItem.quantity--;
      const cloneProduct = [...state];
      cloneProduct[index] = selectItem;
      if (selectItem.quantity < 1) {
        const deleteItem = state.filter((item) => item.id !== action.id);
        return deleteItem;
      } else {
        return cloneProduct;
      }
    }
    case "remove": {
      const deleteItem = state.filter((item) => item.id !== action.id);
      return deleteItem;
    }

    case "size": {
      const value = action.event.value;
      if (value === "All") {
        return ProductDate;
      }
      const filtered = ProductDate.filter((item) => {
        return item.availableSizes.indexOf(value) >= 0;
      });
      return filtered;
    }

    case "sort": {
      const value = action.event.value;
      const cloneProduct = [...state];
      if (value === "Low") {
        const sorted = cloneProduct.sort((a, b) => {
          return a.price - b.price;
        });
        return sorted;
      } else {
        const sorted = cloneProduct.sort((a, b) => {
          return b.price - a.price;
        });
        return sorted;
      }
    }

    case "search": {
      const value = action.event.target.value;
      const filtered = state.filter((item) => {
        return item.title.toLowerCase().includes(value.toLowerCase());
      });
      return filtered;
    }

    default:
      return state;
  }
};

const PrevuesContext = ({ children }) => {
  const [product, dispatch] = useReducer(reduce, initState);

  return (
    <ProductContainer.Provider value={product}>
      <ProductContainerDispatcher.Provider value={dispatch}>
        {children}
      </ProductContainerDispatcher.Provider>
    </ProductContainer.Provider>
  );
};

export default PrevuesContext;

export const useProduct = () => useContext(ProductContainer);
export const useProductAction = () => useContext(ProductContainerDispatcher);
