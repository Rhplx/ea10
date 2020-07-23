import React, { Component } from "react";
import Navigation from "../../components/navigation/navigation.jsx";
import Footer from "../../components/footer/footer.jsx";
import { Link } from "react-router-dom";
import "./quienes.scss";
import imagenQuienes from "../../assets/images/quienes.png";

export default class Quienes extends Component {
  render() {
    return (
      <>
        <Navigation />
        <div className="quienesContenedor">
          <div className="imagenQuienes">
            <img src={imagenQuienes} alt="" />
          </div>
          <div className="textoQuienes">
            <h1>
              EA10 Support Mexico es una sociedad anónima promotora de
              inversión, creada con el objetivo de proporcionar servicios
              financieros, ofreciendo soluciones de forma oportuna y segura,
              acorde a las necesidades de nuestros clientes.
            </h1>

            <Link to="/tratamientos">
              Créditos para cirugías y tratamientos médicos.
            </Link>
            <Link to="/nomina">Prestamos vía nomina</Link>
            <Link to="/personales">Prestamos personales</Link>
            <Link to="/pymes">Prestamos PYMES</Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
