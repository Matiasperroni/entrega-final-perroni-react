import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import appStore from "../../assets/images/appStore.png";
import googlePlay from "../../assets/images/googlePlay.png";
import styles from "./footer.module.css";
import CopyrightIcon from "@mui/icons-material/Copyright";
import React from "react";

const Footer = () => {
  console.log("cargue footer");
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.footerContainerUno}>
          <ul>
            <li>Términos y condiciones</li>
            <li>Acerca de nosotros</li>
            <li>Donde encontrarnos</li>
            <li>Abierto de lunes a sabado de 9hs hasta 19hs</li>
          </ul>
          <ul>
            <li>Políticas de compras</li>
            <li>Metodos de envío</li>
            <li>Formas de pago</li>
          </ul>
          <ul>
            <li>Garantías</li>
            <li>Devoluciones</li>
            <li>Trabaja con nosotros</li>
          </ul>
        </div>
      </div>
      <div className={styles.footerContainer}>
        <div className={styles.footerContainerDos}>
          <CopyrightIcon />
          <p className={styles.parrafo}>2023 AENO, all rights reserved.</p>
        </div>
        <div className={styles.footerContainerTres}>
          <a href="">
            <img className={styles.footerImg} src={appStore} alt="" />
          </a>
          <a href="">
            <img className={styles.footerImg} src={googlePlay} alt="" />
          </a>
          <InstagramIcon />
          <FacebookIcon />
        </div>
      </div>
    </>
  );
};

export default React.memo(Footer);
