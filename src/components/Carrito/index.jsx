import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";

const Carrito = () => {
  const { cart } = useContext(CartContext);
  console.log(cart);

  return (
    <div>
      {cart.map((item) => (
        <h1 key={item.id}>{item.titulo}</h1>
      ))}
    </div>
  );
};

export default Carrito;
