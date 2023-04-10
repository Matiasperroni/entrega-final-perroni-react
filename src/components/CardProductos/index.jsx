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
// import db from "../../../db/firebase-config";
// import { addDoc, collection } from "firebase/firestore";

const CardProductos = ({ producto }) => {
  const { addToCart } = useContext(CartContext);
  // const carroRef = collection(db, "carro");
  // const addToCart = async (e) => {
  //   console.log("hola si funqueee");
  //   e.preventDefault();
  //   await addDoc(carroRef, { titulo: producto.title });
  // };
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
            <Typography>$ {producto.price}</Typography>
          </CardContent>
        </CardActionArea>

        <CardActions className={styles.cardCont}>
          <Button
            onClick={() => addToCart(producto)}
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
