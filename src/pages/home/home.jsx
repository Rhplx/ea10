import React, { Component } from "react";
import "./home.scss";
import Caracteristica1 from "../../assets/images/Estrella.png";
import Caracteristica2 from "../../assets/images/Porcentaje.png";
import Caracteristica3 from "../../assets/images/Reloj.png";
import Caracteristica4 from "../../assets/images/Papeles.png";

export default class Home extends Component {
  render() {
    return (
      <>
        <section className="principal">
          <div className="textoPrincipal">
            <h1>No cambies tu felicidad por dinero</h1>
            <p>
              Prestamos de 5,000 hasta 200,000 pesos, sin pagos anticipados, con
              tasas de interés desde 5.5%
            </p>
          </div>
          <form className="selectorPrestamo">
            <h2>Simulador de credito</h2>
            <p>Monto deseado</p>
            <p>Plazo</p>
            <div className="datosPrestamo">
              <div className="interesPrestamo">
                <label htmlFor="">Interes:</label>
                <input type="text" disabled value="__" />
              </div>
              <div className="mensualPrestamo">
                <label htmlFor="">Pago mensual:</label>
                <input type="text" disabled value="__" />
              </div>
              <div className="totalPrestamo">
                <label htmlFor="">Total pagado:</label>
                <input type="text" disabled value="__" />
              </div>
            </div>
            <button type="submit">Solicitar crédito</button>
          </form>
        </section>
        <section className="caracteristicas">
          <div className="contenedorCaracteristicas">
            <div className="caracteristicaUnica">
              <img src={Caracteristica1} alt="Caracteristica" />
              <p>
                Créditos de hasta 300mil pesos en plazos de hasta 36 meses.{" "}
              </p>
            </div>
            <div className="caracteristicaUnica">
              <img src={Caracteristica2} alt="Caracteristica" />
              <p>Tasa mensual baja</p>
            </div>
            <div className="caracteristicaUnica">
              <img src={Caracteristica3} alt="Caracteristica" />
              <p>
                Tramite sencillo, rápido, con resolución en menos de 24 horas
              </p>
            </div>
            <div className="caracteristicaUnica">
              <img src={Caracteristica4} alt="Caracteristica" />
              <p>Pagos fijos durante todo el crédito</p>
            </div>
          </div>
        </section>
      </>
    );
  }
}
