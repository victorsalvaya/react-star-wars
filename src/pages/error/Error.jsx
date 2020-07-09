import React from 'react'
import './Error.scss'

import { Link } from 'react-router-dom'

export default class Error extends React.Component {
    render() {
        return (
            <div className='Error'>
                <h2>Error</h2>
                <p>Você se perdeu na galáxia ?</p>
                <p>Volte para sua base!</p>
                <Link to='/'>
                    <button className='Btn-Error'>Base</button>
                </Link>
            </div>
        )
    }
}