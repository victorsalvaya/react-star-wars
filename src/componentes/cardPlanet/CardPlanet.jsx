import React from 'react'
import './CardPlanet.scss'
import Loading from '../loading/Loading'
import Error from '../../pages/error/Error'

import servicePlanet from '../../services/Serviceplanets'

export default class CardPlanet extends React.Component {

    state = {
        planetName: '',
        population: '',
        diameter: '',
        terrain: '',
        climate: '',
        films: 0,
        loading: false,
    }

    getPlanetData = () => {
        servicePlanet.getCountPlanet().then(res => {
            let count = res.data.count

            this.setState({loading: true})

            let id = Math.floor(Math.random() * count + 1);

            servicePlanet.getPlanet(id).then(res => {
                let name = res.data.name
                let climate = res.data.climate
                let diameter = res.data.diameter
                let terrain = res.data.terrain
                let population = res.data.population
                let films = res.data.films.length;

                this.setState({
                    planetName: name,
                    population: population,
                    diameter: diameter,
                    climate: climate,
                    terrain: terrain,
                    films: films,
                    loading: false,
                })

            })
            
           
        })
        .catch(error => {
            console.log("O erro é:", error)
            this.setState ({
              error: error
            })
          })
    }

    componentDidMount() {
        this.getPlanetData()
        this.setState({loading: true})
    }

    render() {
        
        if(this.state.error){
            return <Error />
        }
        
        if(this.state.loading){
           return <Loading/>
       }

       
        return (
            <div className='Planets'>
                <div className='Planet-Card'>
                    <h3>PLANET</h3>
                    <h2>{this.state.planetName}</h2>
                    <div className='Planet-Card-Content'>
                        <p>Population: <span>{this.state.population}</span></p>
                        <p>Climate: <span>{this.state.climate}</span></p>
                        <p>Diameter: <span>{this.state.diameter}</span></p>
                        <p>Terrain: <span>{this.state.terrain}</span></p>
                        <p></p>
                    </div>
                    <div className='Planet-footer'>
                        <p>participated in <span>{this.state.films}</span> films</p>
                    </div>
                </div>
                <div className='Btn-planet'>
                    <button onClick={this.getPlanetData}> Next</button>
                </div>
            </div>

        )
    }
}