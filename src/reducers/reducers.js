import { combineReducers } from 'redux';

import { SET_FILTER, SET_MOVIES, CREATE_USER } from '../actions/actions';

import userSlice from '../Features/userSlice';

function visibilityFilter(state = '', action) {
  switch (action.type) {
    case SET_FILTER:
      return action.value;
    default:
      return state;
  }
}

function movies(state = [], action) {
  switch (action.type) {
    case SET_MOVIES:
      return action.value;
    default:
      return state;
  }
}


function users(state={}, action) {
    switch(action.type) {
        case CREATE_USER:
            return {
                ...state,
                name: action.name,
                password: action.password,
                email: action.email,
                birthday: action.birthday,
            }
                    
                 
        default: return state;

    }
}




const moviesApp = combineReducers({
    visibilityFilter,
    movies,
    userSlice,

})


export default moviesApp;