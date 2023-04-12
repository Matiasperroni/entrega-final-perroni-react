import Table from "react-bootstrap/Table";
import { CartContext } from "../../contexts/cartContext.jsx";
import { useContext, useState } from "react";
import styles from "./cartTable.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";

function CartTable() {
  const { cart, eliminarProd, vaciarCart, calcularTotal } =
    useContext(CartContext);
  const [precioTotal, setPrecioTotal] = useState(0);
  const deleteAlertCart = () => {
    Swal.fire({
      icon: "error",
      title: "El producto se elimino del carrito",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  useEffect(() => {
    calcularTotal(setPrecioTotal);
  }, [cart]);
  return (
    <>
      <Table striped>
        <thead>
          <tr className={styles.titulos}>
            <th>IMAGEN</th>
            <th>PRODUCTO</th>
            <th>CANTIDAD</th>
            <th>PRECIO</th>
            <th>ELIMINAR PRODUCTO</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr data-id={item.id} key={item.id}>
              <th>{<img className={styles.cartImg} src={item.imagen} />}</th>
              <th>{item.titulo}</th>
              <th>{item.quantity}</th>
              <th>$ {item.precio}</th>
              <th>
                <DeleteIcon
                  className={styles.icono}
                  onClick={(e) => eliminarProd(e, deleteAlertCart)}
                />
              </th>
            </tr>
          ))}
        </tbody>
      </Table>

      <h4 className={styles.cartText}>EL VALOR TOTAL ES DE: $ {precioTotal}</h4>
      <div className={styles.cartContainer}>
        <Button
          onClick={() => vaciarCart("carro")}
          variant="outlined"
          color="error"
          startIcon={<DeleteIcon />}
        >
          VACIAR CARRITO
        </Button>
        <NavLink to={"/checkoutForm"}>
          <Button
            variant="outlined"
            color="success"
            startIcon={<PointOfSaleIcon />}
          >
            PROCEDER A LA COMPRA
          </Button>
        </NavLink>
      </div>
    </>
  );
}

export default CartTable;
