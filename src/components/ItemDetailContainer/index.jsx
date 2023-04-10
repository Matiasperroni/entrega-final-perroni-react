import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../../db/firebase-config";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState({});

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
    <div>
      <h1>{producto.title}</h1>
      <h2>{producto.description}</h2>
      <h3>{producto.category}</h3>
      <img src={producto.image} alt="" />
    </div>
  );
};

export default ItemDetailContainer;
