import React from 'react';
import Movie from './movie.js';

class MovieList extends React.Component {

  constructor(props) {
    super(props);
    this.props.store.subscribe(() => this.reloadMovies());

    this.state = {
      movies: this.props.store.getState().movieAction.movies
    }
  }
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

  reloadMovies() {
    this.setState({
      movies: this.props.store.getState().movieAction.movies
    });
  }

  render() {

    const movieList = this.state.movies.map((movie, index) =>
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
