import React from 'react'
import {Link} from "react-router-dom";
import logo from '../assets/images/logo.png';



export const NavBarSocio = () => {
    const salir=()=>{
        sessionStorage.clear();
        window.location.href='/'
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark" style={menu}>
                <Link className="navbar-brand" to=" /#">
                    <img src={logo} width="250" height="120" style={imagen} alt=""></img>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/cotizacion" className="nav-link">COTIZAR</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/reserva" className="nav-link">RESERVAR</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/historial" className="nav-link">HISTORIAL</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/micuenta" className="nav-link">MI CUENTA</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/inicio" onClick={()=>salir()} className="nav-link">CERRAR SESIÓN</Link>
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
