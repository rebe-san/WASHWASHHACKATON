import React from 'react';
import {Button, HeaderModal} from '../index';

import './style.css';

const Confirmation = ({washType, address, car, cost}) => {
    return(
        <div className="layer">
            <article className="modal-confirmation">
                <HeaderModal/>
                <p>{washType}</p>
                <p>{address}</p>
                <p>{car}</p>
                <p>Costo: $<span>{cost}</span></p>
                <a>¿Algún objeto para documentar?</a>
                <Button text="Siguiente"/>
            </article>
        </div>
    )
}

export default Confirmation;