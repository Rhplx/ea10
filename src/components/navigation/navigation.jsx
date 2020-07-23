import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/ea10_logo.png";
import "./navigation.scss";

export default class Navigation extends Component {
  mostrarPrestamos = () => {
    let bloquePrestamos = document.getElementById("prestamos");

    if (
      bloquePrestamos.style.display === "" ||
      bloquePrestamos.style.display === "none"
    ) {
      bloquePrestamos.style.display = "block";
    } else {
      bloquePrestamos.style.display = "none";
    }
  };

  render() {
    return (
      <>
        <nav>
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
          <div className="contenedorEnlaces">
            <ul>
              <li onClick={(e) => this.mostrarPrestamos()}>Préstamos</li>
              <li>
                <a href="/#funcionamiento">Como funciona</a>
              </li>
              <li>
                <Link to="/quienes">Quiénes somos</Link>
              </li>
              <li>
                <a href="/#contactanos">Contacto</a>
              </li>
            </ul>
            <div id="prestamos" className="tiposPrestamos">
              <ul>
                <li>
                  <Link to="/tratamientos">Procedimientos medicos</Link>
                </li>
                <li>
                  <Link to="/nomina">Nomina</Link>
                </li>
                <li>
                  <Link to="/personales">Personales</Link>
                </li>
                <li>
                  <Link to="/pymes">PYMES</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
