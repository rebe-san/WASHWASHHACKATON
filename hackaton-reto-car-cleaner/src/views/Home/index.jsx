import React from "react";
import { MapComponent } from "../../components";
import { Button } from "../../components";
import { Input } from "../../components";
import { BoxWeather } from "../../components";

import logo from "../../images/logowash.png";
import "./style.css";

const Home = () => {
  return (
    <section className="home">
      <div className="input-home">
        <img src={logo} alt="imagen-logo" />
        <Input type="text" placeholder="Escribe una dirección" />
      </div>
      <BoxWeather />
      <MapComponent />
      <Button text="PEDIR SERVICIO" className="button-service" />
    </section>
  );
};

export default Home;
