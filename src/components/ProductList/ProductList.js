import { useProduct, useProductAction } from "../../Providers/PrevuesContext";
import Product from "../Product/Product";

const ProductList = () => {
  const product = useProduct();
  const dispatch = useProductAction();
  if (product.length === 0) return <h2>empty Cart</h2>;
  return (
    <div>
      {product.map((item) => {
        return (
          <Product
            product={item}
            key={item.id}
            onDecrement={() => dispatch({ type: "decrement", id: item.id })}
            onIncrement={() => dispatch({ type: "increment", id: item.id })}
            onRemove={() => dispatch({ type: "remove", id: item.id })}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
