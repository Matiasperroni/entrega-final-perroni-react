import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../../../db/firebase-config";
import styles from "./checkout.module.css";

const Checkout = () => {
  const [compras, setCompras] = useState([]);

  useEffect(() => {
    const obtenerCompras = async () => {
      try {
        const compraRef = collection(db, "compras");
        const compraSnapshot = await getDocs(compraRef);

        const detalleCompras = compraSnapshot.docs.map((doc) => {
          const compra = doc.data().compra;
          return {
            id: doc.id,
            direccionUsuario: compra.direccionUsuario,
            emailUsuario: compra.emailUsuario,
            nombreUsuario: compra.nombreUsuario,
            productos: compra.productos,
            totalPrice: compra.totalPrice,
          };
        });

        setCompras(detalleCompras);
      } catch (error) {
        console.error("Error al obtener las compras:", error);
      }
    };

    obtenerCompras();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Detalle de Compra</h1>
      <ul>
        {compras.map((compra) => (
          <li key={compra.id}>
            <h2>ID de Compra: {compra.id}</h2>
            <p>Dirección de Usuario: {compra.direccionUsuario}</p>
            <p>Email de Usuario: {compra.emailUsuario}</p>
            <p>Nombre de Usuario: {compra.nombreUsuario}</p>
            <p>Productos:</p>
            <ul>
              {compra.productos.map((producto, index) => (
                <li key={index}>
                  <p>Título: {producto.titulo}</p>
                  <p>Precio: {producto.precio}</p>
                  <p>Cantidad: {producto.quantity}</p>
                </li>
              ))}
            </ul>
            <p>Precio Total: {compra.totalPrice}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Checkout;
