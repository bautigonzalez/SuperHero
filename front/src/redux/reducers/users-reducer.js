import { LOGGED, LOGOUT, VIEW_USERS } from '../constants';

const initialState = { 
  user: {},
  users: []
 };

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case LOGGED: 
       return {...state, user: action.user};
    case LOGOUT: 
       return {...state, user: {}};
   case VIEW_USERS: 
       return {...state, user: action.users};
    default: 
       return state;
  }
}