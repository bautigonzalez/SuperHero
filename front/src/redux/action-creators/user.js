import axios from "axios"
import { LOGGED, LOGOUT, VIEW_USERS, SEARCH_USER } from '../constants';

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

export const login = (username, password) => dispatch =>{
        return axios.post("/api/login", {username, password})
        .then(res=>dispatch(logged(res.data)))
    } 

export const register = (username, password) => dispatch =>{
        return axios.post("/api/register", {username, password})
        .then(res=>dispatch(logged(res.data)))
    }

export const sendLogout = ()=> dispatch =>{
        return axios.get("/api/logout")
        .then(()=>dispatch(logout()))
    }

export const fetchUsers = ()=> dispatch =>{
        return axios.get(`/api/users`)
          .then(res =>dispatch(viewUsers(res.data)))
      };

export const authenticate = () => (dispatch) =>
      axios.get(`/api/check`).then((res) => dispatch(logged(res.data)))

export const findUser = id => dispatch =>
      axios.get(`/api/users/${id}`).then(res => dispatch(searchUser(res.data)))