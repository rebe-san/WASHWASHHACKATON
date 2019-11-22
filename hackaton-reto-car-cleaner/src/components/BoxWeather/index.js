import React from "react";
import "./style.css";
import sun from "../../images/sun.png";
import temperature from "../../images/temperature.png";

const BoxWeather = () => {
  return(
      <section className="box-weather">
          <p>Hoy es un buen día para lavar tu coche</p>
          <img src={temperature} alt="temp"></img>
          <img src={sun} alt="sun"></img>
      </section>
  )

}

export default BoxWeather;