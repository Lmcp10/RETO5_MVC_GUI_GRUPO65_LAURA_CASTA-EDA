import React from 'react'
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import { Redirect } from 'react-router'

import { NavBarSocio } from '../Components/NavBarSocio'
import { FormularioCotizacion } from '../views/FormularioCotizacion'
import { FormularioReserva } from '../views/FormularioReserva'
import { Historial } from '../views/Historial'
import { Logueado } from '../views/Logueado'
import { Micuenta } from '../views/Micuenta'

export const RouterSocio = () => {
    return (
        <div>
            <Router>
                <div> 

                <NavBarSocio/>
                <Switch>
                    <Route path="/cotizacion">
                        <FormularioCotizacion />
                    </Route>
                    <Route path="/reserva">
                        <FormularioReserva />
                    </Route>
                    <Route path="/historial">
                        <Historial />
                    </Route>
                    <Route path="/micuenta">
                        <Micuenta />
                    </Route>
                    <Route path="/menusocio">
                        <Logueado />
                    </Route>
                    <Redirect to="/menusocio"/>
                </Switch>
                </div>
            </Router>
        </div>
    )
}
