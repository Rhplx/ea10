import React, { Component } from "react";
import Navigation from "../../components/navigation/navigation.jsx";
import imagenTratamiento from "../../assets/images/Img_pm.jpg";
import Footer from "../../components/footer/footer.jsx";

export default class Tratamientos extends Component {
  render() {
    return (
      <>
        <Navigation />

        <div className="prestamoUnico">
          <div className="imagenPrestamo">
            <img src={imagenTratamiento} alt="Tratamiento" />
          </div>
          <div className="textoPrestamo">
            <h1> Créditos para cirugías y tratamientos médicos</h1>
            <p>
              Financiamiento de cualquier cirugía estética, general o
              tratamiento sin restricción alguna. Donde el paciente, familiar o
              amigo puede realizar la solicitud de crédito.
            </p>
            <ul>
              <li>Limite de Crédito desde $5,000 hasta $80,000.00</li>
              <li>Tasas mensual desde 5.5%</li>
              <li>Pagos fijos durante todo el crédito</li>
              <li> Plazos de 12 a 24 meses</li>
              <li>Tramite rápido y sencillo</li>
              <li>Resolución en 24 Horas</li>
            </ul>

            <h3>Requisitos:</h3>

            <ul>
              <li>Edad entre 18 y 70 años</li>
              <li>Ingresos mínimos de $6,000 pesos</li>
              <li>
                En caso de trabajar en el extranjero, el crédito deberá ser
                tramitado por un familiar o amigo residente en México
              </li>
            </ul>
            <h3>Documentos:</h3>

            <ul>
              <li>Identificación Oficial Vigente.</li>
              <li>
                Comprobante de domicilio (No mayor a 2 meses) que coincida con
                la identificación oficial.
              </li>
              <li>
                Comprobante de ingresos (Recibos de nomina o estados de cuenta
                bancarios de los últimos 3 meses).
              </li>
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
        <Footer />
      </>
    );
  }
}
