import React from "react";
import { useParams } from "react-router-dom";
import CardProductos from "../CardProductos";
import styles from "./itemlistcontainer.module.css";

const ItemListContainer = ({ productos }) => {
    const { id } = useParams();
    const filtedProductos = productos.filter(
        (producto) => producto.category === id
    );
    if (id === undefined) {
        return (
            <div className={styles.container}>
                {productos.map((producto) => (
                    <CardProductos key={producto.id} producto={producto} />
                ))}
            </div>
        );
      } else {
        return (
            <div className={styles.container}>
                {filtedProductos.map((producto) => (
                    <CardProductos key={producto.id} producto={producto} />
                ))}
            </div>
        );
      }

};

export default ItemListContainer;
