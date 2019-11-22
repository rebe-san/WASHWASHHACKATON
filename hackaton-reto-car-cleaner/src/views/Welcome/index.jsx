import React from 'react';
import './style.css';
// import Button from '../../components/Button';
import {Link} from 'react-router-dom';
import Logo from '../../images/logowash.png'


const Welcome = () => {
    return(
      <section className="background-welcome">
        <div className="welcome-container">
        <div className="logo-container">
        <img src={Logo} alt="logo-wash" className="logo-img"/>
        </div>
        
          <nav className="navigation-menu">
          <Link to="/registerUser" className="user-btn">
          USUARIO
          </Link>
          <Link to="/registerEmployee" className="nav-a">
            Técnico de lavado
          </Link>
        </nav>  

        </div>
      </section> 
    )
}


export default Welcome;