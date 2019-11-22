import React from 'react';
import {Button} from '../index';

const Confirmation = ({washType, address, car, cost}) => {
    return(
        <article className="modal-confirmation">
            <span></span>
            <figure>
                <img alt=""/>
            </figure>
            <p>{washType}</p>
            <p>{address}</p>
            <p>{car}</p>
            <p>Costo: $<span>{cost}</span></p>
            <a>¿Algún objeto para documentar?</a>
            <Button text="Siguiente"/>
        </article>
    )
}

export default Confirmation;