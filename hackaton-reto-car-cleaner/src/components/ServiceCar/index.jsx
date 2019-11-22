import React from 'react';
import "./style.css";

const ServiceCar = () =>{

    return(
        <section className = "contentServiceCar">
            <p>Tu coche esta en...</p>
            <h5>Angus Dr. #2, Delegación Benito Juarez</h5>

            <section className = "contentButton">
            <button className = "buttonServiceCar">Calle</button>
            <button className = "buttonServiceCar">Domicilio</button>

            </section>
            

            <p>Selecciona tu paquete</p>

            <button className = "buttonServiceCar2">LAVADO EXPRESS</button>
            <a href="#">Mas info</a>

            <button className = "buttonServiceCar2">LAVADO COMPLETO</button>
            <a href="#">Mas info</a>

            <button className = "buttonServiceCar2">LAVADO MENSUAL</button>
            <a href="#">Mas info</a>


        </section>
    )




}



export default ServiceCar