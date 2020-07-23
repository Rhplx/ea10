import React, { Component } from "react";
import Navigation from "../../components/navigation/navigation.jsx";
import imagenNomina from "../../assets/images/vianomina.png";
import Footer from "../../components/footer/footer.jsx";

export default class Nomina extends Component {
  render() {
    return (
      <>
        <Navigation />
        <div className="prestamoUnico">
          <div className="imagenPrestamo">
            <img src={imagenNomina} alt="Tratamiento" />
          </div>
          <div className="textoPrestamo">
            <h1> Prestamos via nomina</h1>
            <p>
              Financiamiento otorgado a empleados de empresas bajo convenios
              asociados a EA10 Support México.
            </p>
            <ul>
              <li>Pagos fijos durante todo el crédito</li>
              <li>Tasas mensual desde 7.9%</li>
              <li>Sin comisión por Apertura de crédito</li>
              <li> Plazos de 12 a 18 meses</li>
              <li>Tramite rápido y sencillo</li>
              <li>Resolución en 24 Horas</li>
            </ul>

            <h3>Solicitud de prestamo via nomina:</h3>
            <ul>
              <li>
                Prestamos basados en antigüedad en la compañía 0 a 1 Año : Hasta
                $5,000 Pesos 1 a 3 Años: Hasta $10,000 Pesos 3 años en adelante:
                Hasta $15,000 Pesos
              </li>
            </ul>
            <h3>Requisitos:</h3>

            <ul>
              <li>Recibo de nomina ultimo mes</li>
              <li>Carta de Antigüedad</li>
            </ul>

            <h3>Aprobación de Crédito:</h3>
            <ul>
              <li> Llenado de solicitud de crédito</li>
              <li>Firma de documentación</li>
            </ul>
            <div className="contenedorBoton">
              <button>
                <a href="/#contactanos">Contáctanos</a>
              </button>
            </div>
          </div>
        </div>
        <Footer />R
      </>
    );
  }
}
