import axios from 'axios'

const servicePlanet = {
    getPlanet(idPlanetPage){
        return axios.get(`https://swapi.dev/api/planets/${idPlanetPage}`);
    },

    getCountPlanet(){
        return axios.get(`https://swapi.dev/api/planets`);
    }
} 

export default servicePlanet;