import React from 'react';
import ReactDOM from 'react-dom';
import MovieList from './movieList.js';
import NewMovieForm from './newMovieForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: []
    }

    this.addMovie = this.addMovie.bind(this);
    this.editMovie = this.editMovie.bind(this);
  }

  addMovie(movie) {
    var newMovieList = this.state.movieList.slice();
    newMovieList.push(movie);

    this.setState({
      movieList: newMovieList
    })
  }

  editMovie(movie) {
    let newMovieName = prompt("Enter a new Movie name");

    var newMovieList = this.state.movieList.slice();
    newMovieList.forEach((movieElement) => {
      if (movie === movieElement) {
        movieElement = newMovieName;
      }
    });

    this.setState({
      movieList: newMovieList
    });

  }

  deleteMovie(id) {

  }

  render() {
    return (
      <div>
        <div><NewMovieForm onSubmit={this.addMovie} /></div>
        <div><MovieList movies={this.state.movieList} onEdit={this.editMovie} onDelete={this.deleteMovie} /></div>
      </div>
    )
  }

}

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
