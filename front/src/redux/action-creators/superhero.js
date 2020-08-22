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

const favSuperhero = (superheros)=>{
  return {
      type: FAV_SUPERHERO,
      superheros
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

export const findFav = ids => dispatch =>{
      let array = []
      for(let i = 0; i < ids.length; i++){
        array.push(
          axios.get(`https://www.superheroapi.com/api.php/2779530068814025/${ids[i]}`)
          .then((res)=>res.data)
          )
      }
      Promise.all(array)
      .then((resp)=>{
        dispatch(favSuperhero(resp))
      })
      };