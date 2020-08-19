import { combineReducers } from "redux"
import superheroReducer from "./superheros-reducer"
import userReducer from "./users-reducer"

export default combineReducers({
    superhero: superheroReducer,
    user: userReducer
})