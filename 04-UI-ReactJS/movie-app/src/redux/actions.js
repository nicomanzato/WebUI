export const ADD_MOVIE = 'ADD_MOVIE';
export const EDIT_MOVIE = 'EDIT_MOVIE';
export const DELETE_MOVIE = 'DELETE_MOVIE';

export function addMovie(movieName) {
  return { type: ADD_MOVIE, movieName }
}

export function editMovie(index, newMovieName) {
  return { type: EDIT_MOVIE, index, newMovieName }
}

export function deleteMovie(index) {
  return { type: DELETE_MOVIE, index }
}
