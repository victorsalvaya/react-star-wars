import React from 'react'
import './BtnHome.scss'
import { Link } from 'react-router-dom'

export default class btnHome extends React.Component {
    render() {
        return (
            <>
                <Link to='/planets'>
                    <button className='Btn-home'>Go</button>
                </Link>
            </>
        )
    }
}