export const SET_MOVIES = 'SET_MOVIES';
export const SET_FILTER = 'SET_FILTER';
export const CREATE_USER = 'CREATE_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USER = 'DELETE_USER';
export const SET_FAVMOVIE = 'SET_FAVMOVIE';
export const REMOVE_FAVMOVIE = 'REMOVE_FAVMOVIE';


export function setMovies(value) {
    return { type: SET_MOVIES, value };
}

export function setFilter(value) {
    return { type: SET_FILTER, value };
}

export function createUser(text) {
    return { type: CREATE_USER, text };
}

export function updateUser(text) {
    return { type: UPDATE_USER, text };
}

export function deleteUser(id) {
    return { type: DELETE_USER, id };
}

export function setFavmovie(index) {
    return { type: SET_FAVMOVIE, index };
}

export function removeFavmovie(index) {
    return { type: REMOVE_FAVMOVIE, index };
}