import { combineReducers } from "redux";

import { SET_FILTER, SET_MOVIES, CREATE_USER, UPDATE_USER, DELETE_USER, SET_FAVMOVIE, REMOVE_FAVMOVIE} from "../actions/actions";

function visibilityFilter(state = '', action) {
    switch (action.type) {
        case SET_FILTER:
            return action.value;
        default:
            return state;
    }
}

function movies(state = [], action){
    switch (action.type){
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
                };
        
        case UPDATE_USER: 
                return {
                    ...state,
                  name: action.name,
                  password: action.password,
                  email: action.email,
                  birthday: action.birthday,  
                };
        
        case DELETE_USER: 
                 return state.map((user, index) => (index===action.index) ? {...user, deleted: !user.deleted} : user)
                    
                 
        default: return state;

    }
}


function favoriteMovies(state=[], action) {
    switch(action.type) {
        //add to the array
        case SET_FAVMOVIE:
            return {
                ...state, 
                favoriteMovies: [...state.favoriteMovies, action.index] 
            }
        case REMOVE_FAVMOVIE:
            //remove from the array
            return {
                ...state,
                favoriteMovies: [...state.favoriteMovies.slice(0, index), state.favoriteMovies.slice(index + 1)]
            }
            
            default: return state;

    }
}


const moviesApp = combineReducers({
    visibilityFilter,
    movies,
    users,
    favoriteMovies

})


export default moviesApp;