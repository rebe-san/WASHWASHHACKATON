import React from 'react';
import "./style.css";

const ServiceCar = () =>{

    return(
        <section className = "modal-confirmation ">
            <section className= "layer contentServiceCar">
                <p>Tu coche esta en...</p>
            <h5>Angus Dr. #2, Delegación Benito Juarez</h5>

            <section className = "contentButton">
                <button className = "buttonServiceCar">Calle</button>
                <button className = "buttonServiceCar">Domicilio</button>
            </section>
            

            <p>Selecciona tu paquete</p>

            <section className = "contentButton">

                <section className = "contentButtonserviceCar2">
                    <button className = "buttonServiceCar2">LAVADO EXPRESS</button>
                    <a className = "enlaceServiceCar"href="#">Mas info</a>
               </section>
            
                <section className = "contentButtonserviceCar2">
                    <button className = "buttonServiceCar2">LAVADO COMPLETO</button>
                    <a className = "enlaceServiceCar"  href="#">Mas info</a>
                </section>

                 <section className = "contentButtonserviceCar2">
                    <button className = "buttonServiceCar2">LAVADO MENSUAL</button>
                    <a className = "enlaceServiceCar" href="#">Mas info</a>
                </section>

            

            </section>

            </section>
            


        </section>
    )




}



export default ServiceCar