import axios from "axios"
import { LOGGED, LOGOUT, VIEW_USERS, SEARCH_USER, SEARCH_USERS } from '../constants';

const logged = function(user){
    return {
        type : LOGGED,
        user
    }
}

const logout = function(){
    return {
        type : LOGOUT
    }
}

const viewUsers = function(users){
    return {
        type: VIEW_USERS,
        users
    }
}

const searchUser = function(user){
    return {
        type: SEARCH_USER,
        user
    }
}

const searchUsers = function(users){
    return {
        type: SEARCH_USERS,
        users
    }
}

export const login = (username, password) => dispatch =>
    axios.post("/api/login", {username, password}).then(res=>dispatch(logged(res.data)))

export const register = (username, password) => dispatch =>
    axios.post("/api/register", {username, password}).then(res=>dispatch(logged(res.data)))

export const sendLogout = ()=> dispatch =>
    axios.get("/api/logout").then(()=>dispatch(logout()))
    
export const fetchUsers = ()=> dispatch =>
    axios.get(`/api/users`).then(res =>dispatch(viewUsers(res.data)))
    
export const authenticate = () => (dispatch) =>
      axios.get(`/api/check`).then((res) => dispatch(logged(res.data)))

export const findUser = id => dispatch =>
      axios.get(`/api/users/${id}`).then(res => dispatch(searchUser(res.data)))

export const findUsers = () => dispatch =>
      axios.get(`/api/users`).then(res => dispatch(searchUsers(res.data)))

export const addFav = (userId, fav) => dispatch =>
      axios.post("/api/addfav", {userId, fav}).then(res=>dispatch(logged(res.data)))

export const deleteFav = (userId, fav) => dispatch =>
      axios.put("/api/deleteFav", {userId, fav}).then(res=>dispatch(logged(res.data)))