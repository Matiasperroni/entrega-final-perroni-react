import React from "react";
import CartWidget from "../CartWidget";
import styles from "./navbar.module.css";
import logoImg from "../../assets/images/logo.jpg";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import DropDownContenido from "../DropdownBtn";

const Navbar = () => {
  console.log("cargue navbar");
  return (
    <div className={styles.container}>
      <div className={styles.imgLogo}>
        <NavLink to="/">
          <img src={logoImg} alt="" />
        </NavLink>
      </div>
      <nav className={styles.navContainer}>
        <DropDownContenido />
        <NavLink to="/">
          <p className={styles.navBarP}> HOME</p>
        </NavLink>
        <p className={styles.navBarP}> ABOUT</p>
        <p className={styles.navBarP}> INGRESAR</p>
        <NavLink to="/carrito">
          <CartWidget />
        </NavLink>
      </nav>
    </div>
  );
};

export default React.memo(Navbar);
