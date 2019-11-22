import React from 'react';
import { IoMdArrowBack } from "react-icons/io";
import './style.css';

import logo from "../../images/logowash.png";

const HeaderModal = () => {
    return(
        <header className="header-modal">
            <span><IoMdArrowBack className="arrow"/></span>
            <figure>
                <img src={logo} alt="wash-wash"/>
            </figure>
        </header>
    )
}

export default HeaderModal;