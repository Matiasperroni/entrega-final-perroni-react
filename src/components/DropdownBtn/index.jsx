// import Dropdown from 'react-bootstrap/Dropdown';
import { NavLink } from "react-router-dom";
// import styles from "./dropdownbtn.module.css";

function DropDownContenido() {
  return (
    <ul>
      <li>
        <NavLink to="/category/men's clothing">ROPA DE HOMBRE</NavLink>
      </li>
      <li>
        <NavLink to="/category/electronics">ELECTRONICA</NavLink>
      </li>
      <li>
        <NavLink to="/category/jewelery">JOYERIA</NavLink>
      </li>
      <li>
        <NavLink to="/category/women's clothing">ROPA DE MUJER</NavLink>
      </li>
    </ul>
    // <Dropdown>
    //   <Dropdown.Toggle className={styles.btn} id="dropdown-basic">
    //     CATEGORIAS
    //   </Dropdown.Toggle>

    //   <Dropdown.Menu className={styles.dropContainer}>
    //     <NavLink to="/category/men's clothing">ROPA DE HOMBRE</NavLink>
    //     <NavLink to="/category/electronics">ELECTRONICA</NavLink>
    //     <NavLink to="/category/jewelery">JOYERIA</NavLink>
    //     <NavLink to="/category/women's clothing">ROPA DE MUJER</NavLink>
    //   </Dropdown.Menu>
    // </Dropdown>
  );
}

export default DropDownContenido;
