import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import styles from "./checkoutform.module.css";
import Button from "@mui/material/Button";
import { CartContext } from "../../contexts/cartContext.jsx";
import { addDoc, collection } from "firebase/firestore";
import db from "../../../db/firebase-config";
import { NavLink } from "react-router-dom";

export default function CheckoutForm() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [direccion, setDireccion] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirm, setEmailConfirm] = useState("");
  const [precioTotal, setPrecioTotal] = useState(0);
  const [isCompra, setIsCompra] = useState(true);
  const { cart, vaciarCart, calcularTotal } = useContext(CartContext);

  useEffect(() => {
    calcularTotal(setPrecioTotal);
  }, []);

  const toggleCompra = () => {
    setIsCompra(!isCompra);
  };

  const realizarCompra = async (productos) => {
    const compraRef = collection(db, "compras");
    const compraData = productos.reduce((acumulador, prod) => {
      acumulador.push({
        titulo: prod.titulo,
        precio: prod.precio,
        quantity: prod.quantity,
      });
      return acumulador;
    }, []);
    await addDoc(compraRef, {
      compra: {
        productos: compraData, // Cambiar el nombre del campo a "productos"
        totalPrice: precioTotal,
        nombreUsuario: nombre + " " + apellido,
        emailUsuario: email,
        direccionUsuario: direccion,
      },
    });
    vaciarCart("carro");
    toggleCompra();
    console.log("compra realizada");
  };

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleApellidoChange = (event) => {
    setApellido(event.target.value);
  };

  const handleDireccionChange = (event) => {
    setDireccion(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleEmailConfirmChange = (event) => {
    setEmailConfirm(event.target.value);
  };

  const isFormValid = () => {
    return (
      nombre !== "" &&
      apellido !== "" &&
      direccion !== "" &&
      email !== "" &&
      emailConfirm !== "" &&
      email === emailConfirm
    );
  };

  return (
    <div className={styles.container}>
      <h1>Completa el formulario con tus datos para proceder a la compra</h1>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          id="input-with-sx"
          label="Nombre"
          variant="standard"
          type="text"
          required
          value={nombre}
          onChange={handleNombreChange}
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          id="input-with-sx"
          label="Apellido"
          variant="standard"
          type="text"
          required
          value={apellido}
          onChange={handleApellidoChange}
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          id="input-with-sx"
          label="Direccion"
          variant="standard"
          type="text"
          required
          value={direccion}
          onChange={handleDireccionChange}
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          id="input-with-sx"
          label="Correo Electrónico"
          variant="standard"
          type="email"
          required
          value={email}
          onChange={handleEmailChange}
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          id="input-with-sx"
          label="Confirmar Email"
          variant="standard"
          type="email"
          name="confirmacionEmail"
          value={emailConfirm}
          onChange={handleEmailConfirmChange}
          required
        />
      </Box>
      <Button
        onClick={() => realizarCompra(cart)}
        variant="contained"
        color="primary"
        disabled={!isFormValid()}
      >
        Proceder a la compra
      </Button>
      <NavLink to="/checkout">
        <Button
          variant="contained"
          style={{ display: isCompra ? "none" : "block" }}
        >
          Ver detalle de compra
        </Button>
      </NavLink>
    </div>
  );
}
