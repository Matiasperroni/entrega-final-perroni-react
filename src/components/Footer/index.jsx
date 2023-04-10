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
            <li>hola</li>
            <li>hola</li>
            <li>hola</li>
            <li>hola</li>
          </ul>
          <ul>
            <li>chau</li>
            <li>chau</li>
            <li>chau</li>
          </ul>
          <ul>
            <li>asd</li>
            <li>asd</li>
            <li>asd</li>
            <li>asd</li>
            <li>asd</li>
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
