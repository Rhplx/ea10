import React, { Component } from "react";
import "./home.scss";
import Caracteristica1 from "../../assets/images/Estrella.png";
import Caracteristica2 from "../../assets/images/Porcentaje.png";
import Caracteristica3 from "../../assets/images/Reloj.png";
import Caracteristica4 from "../../assets/images/Papeles.png";
import Beneficio1 from "../../assets/images/procedimiento.png";
import Beneficio2 from "../../assets/images/nomina.png";
import Beneficio3 from "../../assets/images/personales.png";
import Beneficio4 from "../../assets/images/PyMES.png";
import Circulo from "../../assets/images/circulo.png";
import Footer from "../../components/footer/footer.jsx";
import Navigation from "../../components/navigation/navigation.jsx";

export default class Home extends Component {


  cotizador = (e) => {

    e.preventDefault();

    var monto = document.getElementById("montoDeseado").value*1000;
    monto = monto + 5000;
    document.getElementById("montoActual").innerHTML = monto;
    console.log(monto);

    var plazo = document.getElementById("plazo").value;
    
    switch(plazo){
      case "0":
        plazo = 6;
        document.getElementById("plazoActual").innerHTML = plazo;
        break;
      case "1": 
        plazo = 12;
        document.getElementById("plazoActual").innerHTML = plazo;
        break;
      case "2":
        plazo = 18;
        document.getElementById("plazoActual").innerHTML = plazo;
        break;
      case "3": 
        plazo = 24;
        document.getElementById("plazoActual").innerHTML = plazo;
        break;
      default:
        break;
    }
    console.log(plazo);
    var interes = 0.029*plazo;

    var totalPagado = monto*interes;
    totalPagado = totalPagado.toFixed(2);

    var totalMensual = totalPagado/plazo;

    totalMensual = totalMensual.toFixed(2);
    
    document.getElementById("pagoMensual").value = totalMensual;
    document.getElementById("totalPagado").value = totalPagado;



  }


  render() {
    return (
      <>
        <Navigation />
        <section className="principal">
          <div className="textoPrincipal">
            <h1>No cambies tu felicidad por dinero</h1>
            <p>
              Prestamos de 5,000 hasta 300,000 pesos, sin pagos anticipados, con
              tasas de interés desde 5.5%
            </p>
          </div>
          <form className="selectorPrestamo">
            <h2>Simulador de credito</h2>
            <div className="datosPrestamo1">
              <div>
                <p>Monto deseado</p>
              </div>
              <div>
                <p id="montoActual">5000</p>
              </div>
            </div>
            <input id="montoDeseado" type="range" defaultValue={0}  min="0" max="295" onChange={(e) => this.cotizador(e)} />
            <div className="datosPrestamo1">
              <div>
                <p>Plazo</p>
              </div>
              <div>
                <p id="plazoActual">6</p>
              </div>
            </div>
            <input id="plazo" type="range" defaultValue={0} min="0" max="3" onChange={(e) => this.cotizador(e)} />
            <div className="datosPrestamo">
              {/* <div className="interesPrestamo">
                <label htmlFor="">Interes:</label>
                <input type="text" disabled value="2.9%" />
              </div> */}
              <div className="mensualPrestamo">
                <label htmlFor="">Pago mensual:</label>
                <input id="pagoMensual" type="text" disabled value="__" />
              </div>
              <div className="totalPrestamo">
                <label htmlFor="">Total pagado:</label>
                <input id="totalPagado" type="text" disabled value="__" />
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
        <section className="tipos">
          <div className="contenedorTipos">
            <h1>
              Nuestros créditos de adaptan a <span>tus necesidades</span>, logra
              todos tus objetivos <span> sin complicaciones</span> y en poco
              tiempo
            </h1>
            <div className="tiposPrestamos">
              <div className="tipoPrestamo">
                <img src={Beneficio1} alt="Beneficio" />
                <h5>Procedimientos Médicos</h5>
                <p>
                  Financiamiento para todo tipo de cirugía estética, general o
                  tratamiento sin restricción alguna.{" "}
                </p>
              </div>
              <div className="tipoPrestamo">
                <img src={Beneficio2} alt="Beneficio" />
                <h5>Via Nómina</h5>
                <p>
                  Financiamiento otorgado a empleados de empresas bajo convenios
                  asociados a EA10 SupportMéxico.{" "}
                </p>
              </div>
              <div className="tipoPrestamo">
                <img src={Beneficio3} alt="Beneficio" />
                <h5>Personales</h5>
                <p>
                  Prestamos diseñados para el cumplimento de metas y objetivos
                  personales
                </p>
              </div>
              <div className="tipoPrestamo">
                <img src={Beneficio4} alt="Beneficio" />
                <h5>PYMES</h5>
                <p>
                  Otorgamiento de créditos financieros adecuándonos a las
                  necesidades del negocio y/o proyecto
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="funcionamiento" className="funcionamiento">
          <h1>¿Cómo funciona?</h1>
          <img src={Circulo} alt="" />
        </section>
        <section id="contactanos" className="contactanos">
          <div className="contenedorContactanos">
            <h1>Contáctanos</h1>
            <h2>Escríbenos a hola@ea10sm.com</h2>
            <p>¿En qué préstamo estás interesado?</p>
            <div className="selectoresPrestamos">
              <article>
                <input type="checkbox" name="procedimientos" />
                <label htmlFor="procedimientos">Procedimientos médicos</label>
              </article>
              <article>
                <input type="checkbox" name="procedimientos" />
                <label htmlFor="procedimientos">PYMES</label>
              </article>
              <article>
                <input type="checkbox" name="procedimientos" />
                <label htmlFor="procedimientos">Nómina</label>
              </article>
              <article>
                <input type="checkbox" name="procedimientos" />
                <label htmlFor="procedimientos">Prestamos personales</label>
              </article>
            </div>
            <form action="">
              <div className="contenedorDatos">
                <input type="text" placeholder="Nombre" />
                <input type="email" placeholder="Correo" />
                <input type="tel" placeholder="Telefono" />
              </div>
              <textarea
                name="dudas"
                id="dudas"
                placeholder="Escribe tus dudas aqui"
              ></textarea>
              <div className="contenedorEnviar">
                <input type="submit" value="Solicitar credito" />
              </div>
            </form>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}
