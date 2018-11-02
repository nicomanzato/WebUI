import { connect } from 'react-redux'
import MovieList from './movieList.js'

const mapStateToProps = (state) => {
  return {
    movies: state.movieAction.movies
  }
}

const WrappedMovieList = connect(
  mapStateToProps,
  null
)(MovieList)

export default WrappedMovieList
