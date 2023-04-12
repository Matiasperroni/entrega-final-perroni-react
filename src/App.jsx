import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import db from "../db/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import Carrito from "./components/Carrito";
import CheckoutForm from "./components/CheckoutForm";
import Checkout from "./components/Checkout";

function App() {
  const [productos, setProductos] = useState([]);

  const productosRef = collection(db, "items");
  const getItems = async () => {
    const productosCollection = await getDocs(productosRef);
    const items = productosCollection.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setProductos(items);
  };
  useEffect(() => {
    getItems();
  }, []);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer productos={productos} />} />
        <Route
          path="/category/:id"
          element={<ItemListContainer productos={productos} />}
        />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/checkoutForm" element={<CheckoutForm />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
