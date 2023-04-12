import { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import styles from "./card.module.css";
import { CartContext } from "../../contexts/cartContext";
import Swal from "sweetalert2";

const CardProductos = ({ producto }) => {
  const { addToCart } = useContext(CartContext);
  const addAlertCart = () => {
    Swal.fire({
      icon: "success",
      title: "El producto se agrego al carrito!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <>
      {" "}
      <Card
        sx={{
          maxWidth: 345,
          backgroundColor: "white",
          color: "black",
          marginTop: 10,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="240"
            image={producto.image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {producto.title}
            </Typography>
            <Typography variant="body2">{producto.description}</Typography>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: 36,
              }}
            >
              $ {producto.price}
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActions className={styles.cardCont}>
          <Button
            onClick={() => addToCart(producto, 1, addAlertCart)}
            variant="contained"
            color="success"
          >
            Agregar al carrito
          </Button>
          <NavLink to={`/item/${producto.id}`}>
            <Button variant="contained" color="error">
              Detalles del producto
            </Button>
          </NavLink>
        </CardActions>
      </Card>
    </>
  );
};

export default CardProductos;
