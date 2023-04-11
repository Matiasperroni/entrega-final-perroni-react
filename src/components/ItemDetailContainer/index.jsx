import { doc, getDoc } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../../db/firebase-config";
import { CartContext } from "../../contexts/cartContext";
import Button from "@mui/material/Button";
import styles from "./itemdetailcontainer.module.css";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState({});
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const getProductos = async () => {
    const docRef = doc(db, "items", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setProducto(docSnap.data());
    } else {
      console.log("No existe este elemento");
    }
  };

  useEffect(() => {
    getProductos();
  }, [id]);

  return (
    <div className={styles.contenedor}>
      <h1>{producto.title}</h1>
      <h2>{producto.description}</h2>
      <h3>{producto.category}</h3>
      <img src={producto.image} alt="" />
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        placeholder="Seleccione una cantidad"
      />
      <Button
        onClick={() => addToCart(producto, quantity)}
        variant="contained"
        color="success"
      >
        Agregar al carrito
      </Button>
    </div>
  );
};

export default ItemDetailContainer;
