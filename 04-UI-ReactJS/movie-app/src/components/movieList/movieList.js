import React from 'react';
import { connect } from 'react-redux'
import {
  editMovie,
  deleteMovie,
} from './../../actions'
import MovieComponent from './../movieComponent.js';
import EditMovieForm from './../movieForm/editMovieForm.js';

const MovieList = (props) => {
  const movieList = (props.movies).map((movie, index) =>
    <tr key={index}>
      <td key={index + 'a'}><MovieComponent movie={movie} /></td>
      <td key={index + 'b'}><EditMovieForm onSubmit={props.onEdit} movie={movie} movieIndex={index}/></td>
      <td key={index + 'c'}><button onClick={ () => props.onDelete(index)}>Delete</button></td>
    </tr>
  );

  return (
    <div>
      <h2>Movie List</h2>
      <table>
        <tbody>
          { movieList }
        </tbody>
      </table>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    movies: state.movieAction.movies
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onEdit: (movie, index) => { dispatch(editMovie(index, movie)) },
    onDelete: (index) => { dispatch(deleteMovie(index)) },
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList)
