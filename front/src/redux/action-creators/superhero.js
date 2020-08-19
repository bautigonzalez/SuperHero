 import axios from "axios"
import { SET_SUPERHEROS, SET_SUPERHERO } from "../constants"

const setSuperheros = (superheros, search)=>{
    return {
        type: SET_SUPERHEROS,
        superheros,
        search
    }
}

export const searchSuperheros = search => dispatch =>{
      axios.get(`https://www.superheroapi.com/api.php/2779530068814025/search/${search}`)
        .then(res => {
          dispatch(setSuperheros(res.data, search));
        });
    };

const setSuperhero = (superhero)=>{
      return {
          type: SET_SUPERHERO,
          superhero,
      }
  }
  
export const searchSuperhero = id => dispatch =>{
        axios.get(`https://www.superheroapi.com/api.php/2779530068814025/${id}`)
          .then(res => {
            dispatch(setSuperhero(res.data));
          });
      };