import { ADD_MOVIE, EDIT_MOVIE, DELETE_MOVIE } from './actions';
import { combineReducers } from 'redux'

const initialState = {
  movies: []
}

function movieAction(state = initialState, action) {
  switch (action.type) {
    case ADD_MOVIE:
      return Object.assign({}, state, {
        movies: [
          ...state.movies,
          action.movieName
        ]
      })
    case EDIT_MOVIE:
      return Object.assign({}, state, {
        movies: state.movies
          .slice(0, action.index)
          .concat(action.newMovieName)
          .concat(state.movies.slice(action.index+1))
      })
    case DELETE_MOVIE:
      return Object.assign({}, state, {
        movies: state.movies
          .slice(0, action.index)
          .concat(state.movies.slice(action.index+1))
      })
    default:
      return state
  }
}
const movieApp = combineReducers({
  movieAction
})

export default movieApp
