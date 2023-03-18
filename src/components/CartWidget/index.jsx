import React from 'react';
import styles from "./cartwidget.module.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () => {
  return (
    <div className={styles.cartCont}>
      <ShoppingCartIcon />
      <h6>1</h6>
    </div>
  )
}

export default CartWidget;