import { createContext, useEffect, useState } from "react";
import db from "../../db/firebase-config";
import { addDoc, collection, getDocs } from "firebase/firestore";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const cartRef = collection(db, "carro");
  const getItems = async () => {
    const cartCollection = await getDocs(cartRef);
    const itemsCart = cartCollection.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setCart(itemsCart);
    console.log("update", cart);
  };
  const addToCart = async (item) => {
    await addDoc(cartRef, { titulo: item.title });
    await getItems();
    console.log("siii", cart);
  };

  useEffect(() => {
    getItems();
    console.log("prueba", cart);
  }, []);

  return (
    <CartContext.Provider value={{ addToCart, cart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
