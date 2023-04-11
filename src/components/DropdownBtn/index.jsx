import { NavLink } from "react-router-dom";
import styles from "./dropdownbtn.module.css";

import { useState } from "react";

function DropDownContenido() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.dropdown}>
      <button className={styles.dropdownButton} onClick={toggleDropdown}>
        Categorias
      </button>
      {isOpen && (
        <div className={styles.dropdownContent}>
          <NavLink className={styles.enlace} to="/category/men's clothing">
            ROPA DE HOMBRE
          </NavLink>
          <NavLink className={styles.enlace} to="/category/electronics">
            ELECTRONICA
          </NavLink>
          <NavLink className={styles.enlace} to="/category/jewelery">
            JOYERIA
          </NavLink>
          <NavLink className={styles.enlace} to="/category/women's clothing">
            ROPA DE MUJER
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default DropDownContenido;
