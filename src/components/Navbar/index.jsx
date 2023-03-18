import React from "react";
import CartWidget from "../CartWidget";
import styles from "./navbar.module.css";
import logoImg from "../../assets/images/logo.jpg";
import { NavLink } from "react-router-dom";
import BasicExample from "../DropdownBtn";
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    
        return (
        <div className={styles.container}>
            <div className={styles.imgLogo}>
            <NavLink to="/"><img src={logoImg} alt="" /></NavLink>
            </div>
            <nav className={styles.navContainer}>
                <BasicExample />
                <NavLink to="/"><p> HOME</p></NavLink>
                <p> ABOUT</p>
                <p> INGRESAR</p>
                <CartWidget />
            </nav>
        </div>
    );
};

export default Navbar;
