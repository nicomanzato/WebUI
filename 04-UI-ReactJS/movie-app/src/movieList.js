import React from 'react';
import Movie from './movie.js';
import EditMovieForm from './editMovieForm.js';

class MovieList extends React.Component {

  constructor(props) {
    super(props);
    this.props.store.subscribe(() => this.reloadMovies());

    this.state = {
      movies: this.props.store.getState().movieAction.movies
    }
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
        <td key={index + 'a'}><Movie name={movie} /></td>
        <td key={index + 'b'}><EditMovieForm onSubmit={this.props.onEdit} movie={movie} movieIndex={index} /></td>
        <td key={index + 'c'}><button onClick={ () => this.handleDelete(index)}>Delete</button></td>
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
}

export default MovieList
