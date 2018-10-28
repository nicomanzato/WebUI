import React from 'react';
import ReactDOM from 'react-dom';
import Movie from './movie.js';

class MovieList extends React.Component {
  constructor(props) {
    super(props);
  }

  renderMovie(movieName) {
    return (
      <Movie name={movieName} />
    );
  }

  handleEdit(){
    alert("editMode");
  }

  render() {

    const movieList = this.props.movies.map((movie, index) =>
      <tr key={index}>
        <td key={index + 'a'}>{ this.renderMovie(movie) }</td>
        <td key={index + 'b'}><button onClick={this.handleEdit}>Edit</button></td>
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
