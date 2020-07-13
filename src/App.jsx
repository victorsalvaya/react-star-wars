import React from 'react'
import './App.scss'

import {
    BrowserRouter as Router,
    HashRouter,
    Switch,
    Route,
    BrowserRouter,
  } from "react-router-dom";
  

import Home from './pages/home/Home'
import Planet from './pages/planet/Planet'
import Erro from './pages/error/Error'

export default function App(){
    return(
        <HashRouter>
            <Router>
                <BrowserRouter basename={process.env.PUBLIC_URL}>
                    <Switch>
                        <Route path="/" component={Home} exact />
                        <Route path="/planets" component={Planet} />
                        <Route path="/error" component={Erro} />
                    </Switch>
                </BrowserRouter>
            </Router>
        </HashRouter>
    )
}