import { LOGGED, LOGOUT, VIEW_USERS, SEARCH_USER, SEARCH_USERS } from '../constants';

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
   case SEARCH_USERS:
      return {...state, users: action.users}
    default: 
       return state;
  }
}