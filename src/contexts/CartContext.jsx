import { createContext, useEffect, useState } from "react";
import db from "../../db/firebase-config";
import {
  addDoc,
  collection,
  getDocs,
  deleteDoc,
  doc,
  writeBatch,
} from "firebase/firestore";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [itemsInCart, setItemsInCart] = useState(0);
  const cartRef = collection(db, "carro");
  const getItems = async () => {
    const cartCollection = await getDocs(cartRef);
    const itemsCart = cartCollection.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setCart(itemsCart);
  };
  const addToCart = async (item, quantity) => {
    await addDoc(cartRef, {
      titulo: item.title,
      precio: item.price,
      imagen: item.image,
      quantity,
    });
    await getItems();
  };
  const deleteCart = async (id) => {
    const docuRef = doc(db, "carro", id);
    console.log(docuRef);
    try {
      await deleteDoc(docuRef);
      await getItems();
    } catch {
      console.log("el prod no se pudo eliminar");
    }
    console.log("elimine el producto", id);
  };

  const eliminarProd = async (e) => {
    const prodID =
      e.target.parentElement.parentElement.parentElement.getAttribute(
        "data-id"
      );
    await deleteCart(prodID);
    console.log("algunID", prodID);
  };

  const vaciarCart = async (coleccion) => {
    const querySnapshot = await getDocs(collection(db, coleccion));

    const batch = writeBatch(db);
    querySnapshot.forEach((doc) => {
      batch.delete(doc.ref);
    });

    await batch.commit();
    await getItems();
    console.log(`Colección ${coleccion} eliminada exitosamente.`);
  };

  useEffect(() => {
    getItems();
  }, []);

  const updateCartWidget = () => {
    let cantidadTotal = 0;
    cart.forEach((item) => {
      cantidadTotal += item.quantity;
    });
    setItemsInCart(cantidadTotal);
    console.log("cantidad total", itemsInCart);
    return cantidadTotal;
  };
  useEffect(() => {
    updateCartWidget();
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        addToCart,
        eliminarProd,
        vaciarCart,
        updateCartWidget,
        itemsInCart,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
