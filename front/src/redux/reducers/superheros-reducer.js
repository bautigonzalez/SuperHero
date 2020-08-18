import { SET_SUPERHEROS } from '../constants';

const initialState = { 
  superheros: [],
  search: ""
 };

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case SET_SUPERHEROS: 
       return {...state, superheros: action.superheros.results.slice(0,15), search: action.superheros["results-for"]};
    default: 
       return state;
  }
}