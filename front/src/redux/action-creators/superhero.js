 import axios from "axios"
import { SET_SUPERHEROS } from "../constants"

const setSuperheros = (superheros)=>{
    return {
        type: SET_SUPERHEROS,
        superheros,
    }
}

export const searchSuperheros = search => dispatch =>{
      axios.get(`https://www.superheroapi.com/api.php/2779530068814025/search/${search}`)
        .then(res => {
          dispatch(setSuperheros(res.data));
        });
    };