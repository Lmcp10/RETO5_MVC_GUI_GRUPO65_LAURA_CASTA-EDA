import React from 'react'

import {BrowserRouter as Router, Switch,Route} from "react-router-dom";

import { Inicio } from '../views/Inicio.jsx';
import { Nosotros } from '../views/Nosotros.jsx';
import { Eventos } from '../views/Eventos.jsx';
import { Galeria } from '../views/Galeria.jsx';
import { Login } from '../views/Login.jsx';
import { LoginAdmin } from '../views/LoginAdmin.jsx';
import { NavBarApp } from '../Components/NavBarApp';

export const RouterApp = () => {
    return (
        <div>
            <Router>
                <div>
                    <NavBarApp/>
                    <Switch>
                        <Route path="/nosotros">
                            <Nosotros />
                        </Route>
                        <Route path="/eventos">
                            <Eventos />
                        </Route>
                        <Route path="/galeria">
                            <Galeria />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/loginadmin">
                            <LoginAdmin />
                        </Route>
                        <Route path="/">
                            <Inicio />
                        </Route>
                    </Switch>
                </div>
                </Router>
        </div>
    )
}
