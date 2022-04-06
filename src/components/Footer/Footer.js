// Este archivo se renderiza una sola vez y se utiliza en todas las páginas (al igual que el nav)
import React from "react";

// Styles
import "./Footer.css";

// Components
import { AiTwotoneSliders } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Link to={`/`}>
        <h3 className="brand-container">
          <AiTwotoneSliders size={"1.5em"} />
          Dígito Electrónico
        </h3>
      </Link>

      <hr className="footer-line" />

      <div className="footerItems-right">
        <p className="copy">&#9400; Francisco Muñiz</p>

        <hr className="footer-line separation" />

        <p className="copy">Proyecto Final de React</p>
      </div>
    </footer>
  );
};

export default Footer;
