import { doc, getDoc } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../../db/firebase-config";
import { CartContext } from "../../contexts/cartContext";
import Button from "@mui/material/Button";
import styles from "./itemdetailcontainer.module.css";
import Swal from "sweetalert2";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState({});
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const addAlertCart = () => {
    Swal.fire({
      icon: "success",
      title: "El producto se agrego al carrito!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

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
    <div className={styles.primerDiv}>
      <div className={styles.contenedor}>
        <img className={styles.imagenDetail} src={producto.image} alt="" />
        <h2>{producto.description}</h2>
      </div>
      <div className={styles.contenedorDos}>
        <h1>{producto.title}</h1>
        <h4>PRECIO: $ {producto.price}</h4>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          placeholder="Seleccione una cantidad"
        />
        <Button
          onClick={() => addToCart(producto, quantity, addAlertCart)}
          variant="contained"
          color="success"
        >
          Agregar al carrito
        </Button>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
