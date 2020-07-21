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
          <img src={Logo} alt="Logo" />
          <div className="contenedorEnlaces">
            <ul>
              <li onClick={(e) => this.mostrarPrestamos()}>Préstamos</li>
              <li>
                <Link to="/">Como funciona</Link>
              </li>
              <li>
                <Link to="/">Quiénes somos</Link>
              </li>
              <li>
                <Link to="/">Contacto</Link>
              </li>
            </ul>
            <div id="prestamos" className="tiposPrestamos">
              <ul>
                <li>
                  <Link to="/">Procedimientos medicos</Link>
                </li>
                <li>
                  <Link to="/">Nomina</Link>
                </li>
                <li>
                  <Link to="/">Personales</Link>
                </li>
                <li>
                  <Link to="/">PYMES</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
