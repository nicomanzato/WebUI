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
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  addMovie(movie) {
    var newMovieList = this.state.movieList.slice();
    newMovieList.push(movie);

    this.setState({
      movieList: newMovieList
    })
  }

  editMovie(index, newMovieName) {
    let newMovieList = this.state.movieList
        .slice(0, index)
        .concat([newMovieName])
        .concat(this.state.movieList.slice(index+1));

    this.setState({
      movieList: newMovieList
    });

  }

  deleteMovie(index) {
    var newMovieList = this.state.movieList
        .slice(0, index)
        .concat(this.state.movieList.slice(index+1));


    this.setState({
      movieList: newMovieList
    });
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
