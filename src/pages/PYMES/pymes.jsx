import React, { Component } from "react";
import imagenPymes from "../../assets/images/viaPymes.png";
import Footer from "../../components/footer/footer.jsx";

export default class Tratamientos extends Component {
  render() {
    return (
      <>
        <div className="prestamoUnico">
          <div className="imagenPrestamo">
            <img src={imagenPymes} alt="PYMES" />
          </div>
          <div className="textoPrestamo">
            <h1> Prestamos PYMES</h1>
            <p>
              Otorgamiento de créditos financieros adecuándonos a las
              necesidades del negocio y/o proyecto.
            </p>
            <ul>
              <li>Limite de Crédito desde $5,000 hasta $200,000.00</li>
              <li>Tasas mensual desde 7.9%</li>
              <li>Pagos fijos durante todo el crédito</li>
              <li> Plazos de 12 a 36 meses</li>
              <li>Tramite rápido y sencillo</li>
              <li>Resolución en 24 Horas</li>
            </ul>

            <h3>Requisitos:</h3>

            <ul>
              <li>
                Ser persona moral o física con actividad empresarial y haber
                ejercido actividad durante al menos 12 meses.{" "}
              </li>
              <li>
                Presentar e.Firma(Fiel) del SAT., o bien, presentar los
                siguientes documentos:{" "}
              </li>
              <li>Cedula de identificación fiscal</li>
              <li>
                Declaración de impuestos ante el SAT (De los últimos 2
                ejercicios fiscales)
              </li>
            </ul>
            <h3>Documentos:</h3>

            <ul>
              <li>Comprobante de domicilio (No mayor a 3 meses). </li>
              <li>
                Estado de cuenta, ingresos y gastos. ( De los últimos 3 meses)
              </li>
              <li>
                Identificación oficial vigente con fotografía de los empoderados
                y del representante legal
              </li>
              <li>
                Personas Físicas, en caso de estar casada, presentar acta de
                matrimonio.
              </li>
            </ul>
            <h3>Aprobación de Crédito:</h3>
            <ul>
              <li> Llenado de solicitud de crédito</li>
              <li>Firma de documentación</li>
            </ul>
          </div>
          <div className="contenedorBoton">
            <button>Contáctanos</button>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}
