import { createContext, useEffect, useState } from "react";
import db from "../../db/firebase-config";
import {
  addDoc,
  collection,
  getDocs,
  deleteDoc,
  doc,
  writeBatch,
  query,
  where,
} from "firebase/firestore";
import Swal from "sweetalert2";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const msj = () => {
    Swal.fire({
      icon: "error",
      title: "El producto ya existe en el carrito",
      showConfirmButton: false,
      timer: 1500,
    });
  };
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
  const addToCart = async (item, quantity, func) => {
    try {
      const cartRef = collection(db, "carro");
      const cartQuery = query(cartRef, where("itemId", "==", item.id));
      const cartSnapshot = await getDocs(cartQuery);

      if (cartSnapshot.size > 0) {
        msj();
      } else {
        await addDoc(cartRef, {
          itemId: item.id,
          titulo: item.title,
          precio: item.price,
          imagen: item.image,
          quantity,
        });
        func();
        await getItems();
      }
    } catch (error) {
      console.error("Error al agregar el item al carrito:", error);
    }
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

  const eliminarProd = async (e, func) => {
    const prodID =
      e.target.parentElement.parentElement.parentElement.getAttribute(
        "data-id"
      );
    await deleteCart(prodID);
    func();
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
    return cantidadTotal;
  };
  useEffect(() => {
    updateCartWidget();
  }, [cart]);

  const calcularTotal = (func) => {
    let total = 0;
    cart.forEach((element) => {
      total += element.precio * element.quantity;
    });
    func(total.toFixed(2));
  };

  return (
    <CartContext.Provider
      value={{
        addToCart,
        eliminarProd,
        vaciarCart,
        updateCartWidget,
        itemsInCart,
        cart,
        calcularTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
