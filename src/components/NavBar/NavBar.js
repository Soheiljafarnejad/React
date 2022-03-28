import { useEffect, useState } from "react";
import { useProduct } from "../../Providers/PrevuesContext";
import style from "./NavBar.module.css";
const NavBar = () => {
  const product = useProduct();

  const [price, setPrice] = useState(0);
  const priceHandler = () => {
    const totalPrice = product.reduce((sum, item) => {
      return sum + item.price * item.quantity;
    }, 0);
    setPrice(totalPrice);
  };

  const [quantity, setQuantity] = useState(0);
  const quantityHandler = () => {
    const totalQuantity = product.reduce((sum, item) => {
      return sum + item.quantity;
    }, 0);
    setQuantity(totalQuantity);
  };

  useEffect(() => {
    priceHandler();
    quantityHandler();
  },[product]);

  return (
    <header>
      <h2>Shopping Cart</h2>
      <p className={style.value}>{quantity}</p>
      <p className={style.value}>Total: {price} $</p>
    </header>
  );
};

export default NavBar;
