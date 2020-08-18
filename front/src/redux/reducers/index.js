import { combineReducers } from "redux"
import superheroReducer from "./superheros-reducer"

export default combineReducers({
    superhero: superheroReducer
})