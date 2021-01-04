import React from 'react';
import { NavBar } from './NavBar';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { AboutPage } from './AboutPage';
import { LoginPage } from './LoginPage';
import { HomePage } from './HomePage';

export const AppRouter = () => {
    return (
        <Router>
            <div >
                <NavBar />
                <div className="container">
                <Switch>
                    {/* exact es para indicar que el  path forsozamente debe ser igual al indicado */}
                    <Route exact path="/" component={ HomePage } />

                    <Route exact path="/about" component={ AboutPage } />
                    <Route exact path="/login" component={ LoginPage } />

                    {/* Redirect se toma como el defaul del switch y si no se encuentra la ruta en los
                    casos anterirores re direcciona a la ruta indicada */}
                    <Redirect to="/" />

                    
                    {/* con esta linea indicamos que cualquier ruta que no se encuentre se tome 
                    como el componente HomePage o puede ser otro componente ejemplo error004Component
                    <Route component={ HomePage } /> */}

                </Switch>
                </div>
            </div>
        </Router>
    )
}
