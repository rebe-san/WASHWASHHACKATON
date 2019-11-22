import React from "react";
import { MapComponent, Button, Input, Confirmation, CreditCard , BoxWeather} from "../../components";
import logo from "../../images/logowash.png";
import "./style.css";

const Home = () => {
  return (
    <main>
      <div className="modal-container hide">
        <Confirmation/>
        <CreditCard/>
      </div>
      <section className="home">
          <div className="input-home">
            <img src={logo} alt="imagen-logo" />
            <Input type="text" placeholder="Escribe una dirección"/>
          </div>
        <BoxWeather />
        <MapComponent />
        <div className="button-container">
          <Button text="PEDIR SERVICIO" className="button-service"/>
        </div>
      </section>
    </main>
  );
};

export default Home;
