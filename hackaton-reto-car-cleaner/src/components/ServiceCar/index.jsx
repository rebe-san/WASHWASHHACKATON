import React from 'react';
import "./style.css";

const ServiceCar = () =>{

    return(
        <section>
            <p>Tu coche esta en...</p>
            <h5>Angus Dr. #2, Delegación Benito Juarez</h5>

            <button className = "buttonServiceCar">Calle</button>
            <button className = "buttonServiceCar">Domicilio</button>

            <p>Selecciona tu paquete</p>

            <button>LAVADO EXPRESS</button>
            <a href="#">Mas info</a>

            <button>LAVADO COMPLETO</button>
            <a href="#">Mas info</a>

            <button>LAVADO MENSUAL</button>
            <a href="#">Mas info</a>


        </section>
    )




}



export default ServiceCar