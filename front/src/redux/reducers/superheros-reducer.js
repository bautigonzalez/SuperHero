import { SET_SUPERHEROS, SET_SUPERHERO, FAV_SUPERHERO } from '../constants';

const initialState = { 
  superheros: [],
  favSuperheros: [],
  search: "",
  superhero: {}
 };

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case SET_SUPERHEROS: 
      if(action.superheros.response=="error") return {...state, superheros: [], search: action.search};
       return {...state, superheros: action.superheros.results.slice(0,15), search: action.search};
    case SET_SUPERHERO: 
       return {...state, superhero: action.superhero};
    case FAV_SUPERHERO: 
       return {...state, favSuperheros: action.superheros};
    default: 
       return state;
  }
}