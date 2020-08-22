 import axios from "axios"
import { SET_SUPERHEROS, SET_SUPERHERO, FAV_SUPERHERO } from "../constants"

const setSuperheros = (superheros, search)=>{
    return {
        type: SET_SUPERHEROS,
        superheros,
        search
    }
}

const setSuperhero = (superhero)=>{
  return {
      type: SET_SUPERHERO,
      superhero,
  }
}

const favSuperhero = (superhero)=>{
  return {
      type: FAV_SUPERHERO,
      superhero
  }
}

export const searchSuperheros = search => dispatch =>{
      axios.get(`https://www.superheroapi.com/api.php/2779530068814025/search/${search}`)
        .then(res => {
          dispatch(setSuperheros(res.data, search));
        });
    };


export const searchSuperhero = id => dispatch =>{
        axios.get(`https://www.superheroapi.com/api.php/2779530068814025/${id}`)
          .then(res => {
            dispatch(setSuperhero(res.data));
          });
      };

export const findFav = id => dispatch =>{
        axios.get(`https://www.superheroapi.com/api.php/2779530068814025/${id}`)
          .then(res => {
            dispatch(favSuperhero(res.data));
          });
      };