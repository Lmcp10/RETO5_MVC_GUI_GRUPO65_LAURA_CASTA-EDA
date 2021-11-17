import React from 'react'
import {Link} from "react-router-dom";
import logo from '../assets/images/logo.png';


export const NavBarAdmin = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark" style={menu}>
                <Link className="navbar-brand" to="/">
                    <img src={logo} width="250" height="120" style={imagen} alt=""></img>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/historialreservas" className="nav-link">HISTORIAL RESERVAS</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/historialsocio" className="nav-link">HISTORIAL SOCIO</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/historialcotizacion" className="nav-link">HISTORIAL COTIZACIÓN</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/registroreservas" className="nav-link">REGISTRO REV</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/registrosocio" className="nav-link">REGISTRO soc</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/registrocotizacion" className="nav-link">REGISTRO COT</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/inicio" className="nav-link">CERRAR SESIÓN</Link>
                        </li>
                        
                    </ul>
                </div>
            </nav>
        </div>
    )
}

const menu = {
    backgroundColor: '#263555'
  };

const imagen ={
    borderRadius : "20px",
    marginLeft : "50px"
}
