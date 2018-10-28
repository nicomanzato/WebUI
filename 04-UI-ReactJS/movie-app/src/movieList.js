import React from 'react';
import Movie from './movie.js';

class MovieList extends React.Component {

  renderMovie(movieName) {
    return (
      <Movie name={movieName} />
    );
  }

  handleEdit(movie){
    this.props.onEdit(movie);
  }

  render() {

    const movieList = this.props.movies.map((movie, index) =>
      <tr key={index}>
        <td key={index + 'a'}>{ this.renderMovie(movie) }</td>
        <td key={index + 'b'}><button onClick={ () => this.handleEdit(movie)}>Edit</button></td>
        <td key={index + 'c'}><button>Delete</button></td>
      </tr>
    );

    return (
      <table>
        <tbody>
          { movieList }
        </tbody>
      </table>
    );
  }
}

export default MovieList
