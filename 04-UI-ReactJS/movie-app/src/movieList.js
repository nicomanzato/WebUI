import React from 'react';
import Movie from './movie.js';

class MovieList extends React.Component {

  renderMovie(movieName) {
    return (
      <Movie name={movieName} />
    );
  }

  handleEdit(index) {
    this.props.onEdit(index, prompt("Enter a new Movie name"));
  }

  handleDelete(index) {
    this.props.onDelete(index);
  }

  render() {

    const movieList = this.props.movies.map((movie, index) =>
      <tr key={index}>
        <td key={index + 'a'}>{ this.renderMovie(movie) }</td>
        <td key={index + 'b'}><button onClick={ () => this.handleEdit(index)}>Edit</button></td>
        <td key={index + 'c'}><button onClick={ () => this.handleDelete(index)}>Delete</button></td>
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
