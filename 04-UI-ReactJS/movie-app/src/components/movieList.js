import React from 'react';
import MovieComponent from './movieComponent.js';
import EditMovieForm from './movieForm/editMovieForm.js';

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

export default MovieList
