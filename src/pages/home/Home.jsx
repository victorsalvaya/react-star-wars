import React from 'react'

import './Home.scss'
import Logo from '../../assets/StarWars-logo.png'
import BtnHome from '../../componentes/btnHome/BtnHome'

export default class Home extends React.Component {
    render() {
        return (
            <div className='Home'>
                <img src={Logo} alt="logo" />
                <h1>Desafio BW2 Digital Front-end</h1>
                <BtnHome />
            </div>
        )
    }
}