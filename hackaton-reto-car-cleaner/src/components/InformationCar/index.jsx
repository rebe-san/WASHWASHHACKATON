import React from "react";
import "./style.css";
// import {Link} from 'react-router-dom';
import Input from '../Input'
import Button from '../Button'

import HeaderModal from '../../components/HeaderModal'

const Select = ({name, value}) =>{
   return (   
    <div className="layer">  
    <HeaderModal /> 
    <section className="modal-confirmation">
       <p class="txt-confirm">Angus Dr. #2, Del. Benito Juárez</p>
  <p class ="txt-confirm">Elige las características de tu coche:</p>
</section>
<section className="selects">
    Marca:
    <select 
       className="select"
       name={name}
       value={value}
       /> 
    Modelo:   
    <select 
       className="select"
       name={name}
       value={value}
       /> 
    Color:   
    <select 
       className="select"
       name={name}
       value={value}
       /> 
</section>
<section className="input-placa">
<input type="text" className="placas" placeholder="Placa No."></input>
</section>
<section class="btn-reg-car">
<input className="button button-car"  value="Aceptar" /> 
</section>

</div> 
   )
}
export default Select;