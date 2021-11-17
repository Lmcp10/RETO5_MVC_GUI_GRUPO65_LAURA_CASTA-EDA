import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import { Redirect } from 'react-router'
import { NavBarAdmin } from '../Components/NavBarAdmin'
import { HistorialCotizacion } from '../views/HistorialCotizacion'
import { HistorialReservas } from '../views/HistorialReservas'
import { HistorialSocio } from '../views/HistorialSocio'
import { Logueado1 } from '../views/Logueado1'
import { RegistroCotizacion } from '../views/RegistroCotizacion'
import { RegistroReservas } from '../views/RegistroReservas'
import { RegistroSocio } from '../views/RegistroSocio'


export const RouterAdmin = () => {
    return (
        <div>            
            <Router>
            <div> 
            <NavBarAdmin/>
            <Switch>
                <Route path="/historialreservas">
                    <HistorialReservas />
                </Route>
                <Route path="/historialsocio">
                    <HistorialSocio />
                </Route>
                <Route path="/historialcotizacion">
                    <HistorialCotizacion />
                </Route>
                <Route path="/registroreservas">
                    <RegistroReservas />
                </Route>
                <Route path="/registrosocio">
                    <RegistroSocio />
                </Route>
                <Route path="/registrocotizacion">
                    <RegistroCotizacion />
                </Route>
                <Route path="/menuadmin">
                    <Logueado1 />
                </Route>
                <Redirect to="/"/>
            </Switch>
            </div>
                </Router>
        </div>
    )
}
