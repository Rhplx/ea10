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

  

  sendEmail = (e) => {
    e.preventDefault();

    var medicos;
    var pymes;
    var nomina;
    var personales;

    ((document.getElementById("procedimientos").checked) ? medicos="Esta interesado" :medicos="No esta interesado" );
    ((document.getElementById("procedimientos").checked) ? pymes="Esta interesado"  :pymes="No esta interesado" );
    ((document.getElementById("procedimientos").checked) ? nomina="Esta interesado"  :nomina="No esta interesado" );
    ((document.getElementById("procedimientos").checked) ? personales="Esta interesado" :personales="No esta interesado" );

    let formData = new FormData();

    formData.append("nombre", document.getElementById("nombre").value);
    formData.append("correo", document.getElementById("correo").value);
    formData.append("tel", document.getElementById("tel").value);
    formData.append("dudas", document.getElementById("dudas").value);
    formData.append("medicos", medicos);
    formData.append("pymes", pymes);
    formData.append("nomina", nomina);
    formData.append("personales", personales);
    
    fetch("api/mail.php", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.text())
      .then((response) => {
        if (response === "1"){
          document.getElementById("contenedorEnviar").innerHTML = "<p>¡Gracias por tu Mensaje</p>!";
        } else {
          document.getElementById("contenedorEnviar").innerHTML = '<p>Hubo un problema, revisa los campos.</p><br/><input type="submit" value="Solicitar credito" />';
        }
      });
  };


  cotizador = (e) => {

    e.preventDefault();

    var monto = document.getElementById("montoDeseado").value*1000;
    monto = monto + 5000;

    var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });
    
    document.getElementById("montoActual").innerHTML = formatter.format(monto);

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


    function pmt(rate_per_period, number_of_payments, present_value, future_value, type){
      future_value = typeof future_value !== 'undefined' ? future_value : 0;
      type = typeof type !== 'undefined' ? type : 0;
  
      if(rate_per_period !== 0.0){
      // Interest rate exists
        var q = Math.pow(1 + rate_per_period, number_of_payments);
        return -(rate_per_period * (future_value + (q * present_value))) / ((-1 + q) * (1 + rate_per_period * (type)));
  
      } else if(number_of_payments !== 0.0){
        // No interest rate, but number of payments exists
        return -(future_value + present_value) / number_of_payments;
      }
  
      return 0;
     }

    let ir = 0.054133333;
    let np = plazo;
    let pv = monto;
    let pagoMensual = pmt(ir, np, pv);
    let totalPago= pagoMensual * np;
    document.getElementById("pagoMensual").value = Math.abs(pagoMensual.toFixed(2));
    document.getElementById("totalPagado").value = Math.abs(totalPago.toFixed(2));


  }

  tipoPrestamoColor(estado,cuadro) {
  
    switch(cuadro){
      case 1:
        if (estado === true){
          document.getElementById("tipoPrestamo1").style.backgroundColor = "#70E4BF";
          document.getElementById("tipoPrestamo1").innerHTML ='<p style="font-size:18px;margin-top:45%"><a href="/tratamientos" style="text-decoration: none;">Mas Infomación ></a></p>';
        } else{
          document.getElementById("tipoPrestamo1").style.backgroundColor = "white";
          document.getElementById("tipoPrestamo1").innerHTML ='<img src='+Beneficio1+' alt="Beneficio" /><h5>Procedimientos Médicos</h5><p class="playfair">Financiamiento para todo tipo de cirugía estética, general o tratamiento sin restricción alguna.</p>';
        }
        break;
      case 2:
        if (estado === true){
          document.getElementById("tipoPrestamo2").style.backgroundColor = "#70E4BF";
          document.getElementById("tipoPrestamo2").innerHTML ='<p style="font-size:18px;margin-top:45%"><a href="/nomina" style="text-decoration: none;">Mas Infomación ></a></p>';
        } else{
          document.getElementById("tipoPrestamo2").style.backgroundColor = "white";
          document.getElementById("tipoPrestamo2").innerHTML ='<img src='+Beneficio2+' alt="Beneficio" /><h5>Via Nómina</h5><p class="playfair">Financiamiento otorgado a empleados de empresas bajo convenios asociados a EA10 SupportMéxico.</p>';
        }
        break;
      case 3:
        if (estado === true){
          document.getElementById("tipoPrestamo3").style.backgroundColor = "#70E4BF";
          document.getElementById("tipoPrestamo3").innerHTML ='<p style="font-size:18px;margin-top:45%"><a href="/personales" style="text-decoration: none;">Mas Infomación ></a></p>';
        } else{
          document.getElementById("tipoPrestamo3").style.backgroundColor = "white";
          document.getElementById("tipoPrestamo3").innerHTML ='<img src='+Beneficio3+' alt="Beneficio" /><h5>Personales</h5><p className="playfair">Prestamos diseñados para el cumplimento de metas y objetivos personales</p>';
        }
        break;
      case 4:
        if (estado === true){
          document.getElementById("tipoPrestamo4").style.backgroundColor = "#70E4BF";
          document.getElementById("tipoPrestamo4").innerHTML ='<p style="font-size:18px;margin-top:45%"><a href="/pymes" style="text-decoration: none;">Mas Infomación ></a></p>';
        } else{
          document.getElementById("tipoPrestamo4").style.backgroundColor = "white";
          document.getElementById("tipoPrestamo4").innerHTML ='<img src='+Beneficio4+' alt="Beneficio" /><h5>PYMES</h5><p className="playfair">Otorgamiento de créditos financieros adecuándonos a las necesidades del negocio y/o proyecto </p>';
        }
        break;
      default:
        break;
    }

  }


  render() {
    return (
      <>
        <Navigation />
        <section className="principal">
          <div className="textoPrincipal">
            <h1>No cambies tu felicidad por dinero</h1>
            <p className="playfair">
              Prestamos de 5,000 hasta 300,000 pesos, sin pagos anticipados, con
              tasas de interés desde 5.5%
            </p>
          </div>
          <form className="selectorPrestamo" action="/#contactanos">
            <h2>Simulador de credito</h2>
            <div className="datosPrestamo1">
              <div>
                <p>Monto deseado</p>
              </div>
              <div>
                <p id="montoActual" className="montosVerde playfair">$5,000.00</p>
              </div>
            </div>
            <input id="montoDeseado" type="range" defaultValue={0}  min="0" max="295" onChange={(e) => this.cotizador(e)} />
            <div className="datosPrestamo1">
              <div>
                <p>Plazo</p>
              </div>
              <div>
                <p className="montosVerde playfair"><span id="plazoActual">6 </span> meses</p>
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
              <div id="tipoPrestamo1" className="tipoPrestamo" onMouseEnter={() => this.tipoPrestamoColor(true,1)} onMouseLeave={() => this.tipoPrestamoColor(false,1)}>
                <img src={Beneficio1} alt="Beneficio" />
                <h5>Procedimientos Médicos</h5>
                <p className="playfair">
                  Financiamiento para todo tipo de cirugía estética, general o
                  tratamiento sin restricción alguna.{" "}
                </p>
              </div>
              <div id="tipoPrestamo2" className="tipoPrestamo" onMouseEnter={() => this.tipoPrestamoColor(true,2)} onMouseLeave={() => this.tipoPrestamoColor(false,2)}>
                <img src={Beneficio2} alt="Beneficio" />
                <h5>Via Nómina</h5>
                <p className="playfair">
                  Financiamiento otorgado a empleados de empresas bajo convenios
                  asociados a EA10 SupportMéxico.
                </p>
              </div>
              <div id="tipoPrestamo3" className="tipoPrestamo" onMouseEnter={() => this.tipoPrestamoColor(true,3)} onMouseLeave={() => this.tipoPrestamoColor(false,3)}>
                <img src={Beneficio3} alt="Beneficio" />
                <h5>Personales</h5>
                <p className="playfair">
                  Prestamos diseñados para el cumplimento de metas y objetivos
                  personales
                </p>
              </div>
              <div id="tipoPrestamo4" className="tipoPrestamo" onMouseEnter={() => this.tipoPrestamoColor(true,4)} onMouseLeave={() => this.tipoPrestamoColor(false,4)}>
                <img src={Beneficio4} alt="Beneficio" />
                <h5>PYMES</h5>
                <p className="playfair">
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
                <input id="procedimientos" type="checkbox"  />
                <label htmlFor="procedimientos">Procedimientos médicos</label>
              </article>
              <article>
                <input id="pymes" type="checkbox" />
                <label htmlFor="pymes">PYMES</label>
              </article>
              <article>
                <input id="nomina" type="checkbox"/>
                <label htmlFor="nomina">Nómina</label>
              </article>
              <article>
                <input id="personales" type="checkbox"/>
                <label htmlFor="personales">Prestamos personales</label>
              </article>
            </div>
            <form  onSubmit={(e) => this.sendEmail(e)}>
              <div className="contenedorDatos">
                <input id="nombre" type="text" placeholder="Nombre"  className="playfair"/>
                <input id="correo" type="email" placeholder="Correo" className="playfair" />
                <input id="tel" type="tel" placeholder="Telefono" className="playfair" />
              </div>
              <textarea
                name="dudas"
                id="dudas"
                placeholder="Escribe tus dudas aquí."
                className="playfair"
              ></textarea>
              <div id="contenedorEnviar" className="contenedorEnviar">
                <input type="submit" value="Solicitar Crédito" />
              </div>
            </form>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}
