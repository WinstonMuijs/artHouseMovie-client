export const SET_MOVIES = 'SET_MOVIES';
export const SET_FILTER = 'SET_FILTER';
export const LOGIN = 'LOGIN';
export const CREATE_USER = 'CREATE_USER'; 

export function setMovies(value) {
  return { type: SET_MOVIES, value };
}

export function setFilter(value) {
  return { type: SET_FILTER, value };
}

export function createUser(text) {
    return { type: CREATE_USER, text };
}


