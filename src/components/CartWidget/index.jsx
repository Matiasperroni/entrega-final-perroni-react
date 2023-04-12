import React, { useContext } from "react";
import styles from "./cartwidget.module.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CartContext } from "../../contexts/cartContext.jsx";

const CartWidget = () => {
  const { itemsInCart } = useContext(CartContext);
  return (
    <div className={styles.cartCont}>
      <ShoppingCartIcon />
      <h6 className={styles.widget}>{itemsInCart}</h6>
    </div>
  );
};

export default CartWidget;
