export const ADD_MOVIE = 'ADD_MOVIE';
export const EDIT_MOVIE = 'EDIT_MOVIE';
export const DELETE_MOVIE = 'DELETE_MOVIE';

export function addMovie(newMovie) {
  return { type: ADD_MOVIE, newMovie }
}

export function editMovie(index, newMovie) {
  return { type: EDIT_MOVIE, index, newMovie }
}

export function deleteMovie(index) {
  return { type: DELETE_MOVIE, index }
}
