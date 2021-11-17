import React from 'react'
import logo from '../assets/images/logo.png';
import {Link} from "react-router-dom";

export const NavBarApp = () => {
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
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/inicio" className="nav-link" ><i className="fas fa-handshake"></i>INICIO</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/nosotros" className="nav-link"><i className="fas fa-building"></i>NOSOTROS</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/eventos" className="nav-link"><i className="fas fa-wine-bottle"></i>EVENTOS</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/galeria" className="nav-link"><i className="fas fa-images"></i>GALERIA</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="nav-link"><i className="fas fa-users"></i>SOCIOS</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/loginadmin" className="nav-link"><i className="fas fa-users-cog"></i>LOGIN ADMIN</Link>
                        </li> 
                    </ul>
                </div>
            </nav>
        </div>
    )
}

const menu = {
    backgroundColor: '#263555',
    fontSize: '16px'
  };

const imagen ={
    borderRadius : "20px",
    marginLeft : "50px"
}

