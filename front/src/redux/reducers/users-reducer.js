import { LOGGED, LOGOUT, VIEW_USERS, SEARCH_USER } from '../constants';

const initialState = { 
  user: {},
  users: [],
  searchUser: {}
 };

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case LOGGED: 
       return {...state, user: action.user};
    case LOGOUT: 
       return {...state, user: {}};
   case VIEW_USERS: 
       return {...state, users: action.users};
   case SEARCH_USER: 
       return {...state, searchUser: action.user};
    default: 
       return state;
  }
}