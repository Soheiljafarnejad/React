import style from "./product.module.css";
import { BiTrash } from "react-icons/bi";

const Product = ({ product, onDecrement, onIncrement, onRemove }) => {
  return (
    <div className={style.product}>
      <p>{product.title}</p>
      <p>{product.availableSizes.join("-")}</p>
      <p>{product.price} $</p>
      <p className={style.value}>{product.quantity}</p>

      <div>
        <button onClick={onIncrement} className={style.btnPrimary}>
          +
        </button>
        <button onClick={onDecrement} className={`${product.quantity === 1 && style.brnRemove}`}>
          {product.quantity === 1 ? <BiTrash /> : "-"}
        </button>
        <button onClick={onRemove}>delete</button>
      </div>
    </div>
  );
};

export default Product;
