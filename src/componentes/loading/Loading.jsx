import React from 'react'
import './Loading.scss'
import GifLoading from '../../assets/loading-teste.gif'

export default class Loading extends React.Component {
    render(){
        return(
            <div className='Loading'>
                <img src={GifLoading} alt='GifLoading' />
                <p>Loading...</p>
            </div>
        )
    }
}