import React from 'react';
import ReactDOM from 'react-dom';
import MovieList from './movieList.js';
import NewMovieForm from './newMovieForm.js';
import { createStore } from 'redux'
import movieApp from './redux/movieApp.js';
import {
  addMovie,
  editMovie,
  deleteMovie,
} from './redux/actions'

const store = createStore(movieApp);

class App extends React.Component {

  constructor(props) {
    super(props);

    // Previous Implementation
    //this.state = {
    //  movieList: []
    //}

    const unsubscribe = store.subscribe(() => console.log(store.getState()));

    store.dispatch(addMovie({
      name: 'Movie 1 asdf',
      duration: 2,
      year: 1993
    }));
    store.dispatch(addMovie({
      name: 'Movie 2',
      duration: 2,
      year: 1993
    }));
    store.dispatch(addMovie({
      name: 'Movie 3',
      duration: 2,
      year: 1993
    }));

    //Previous implementation
    //this.addMovie = this.addMovie.bind(this);
    //this.editMovie = this.editMovie.bind(this);
    //this.deleteMovie = this.deleteMovie.bind(this);
  }

  addMovie(movie) {
    // Previous implementation
    /*

    var newMovieList = this.state.movieList.slice();
    newMovieList.push(movie);

    this.setState({
      movieList: newMovieList
    })
    */

    //Redux Implementation
    store.dispatch(addMovie(movie));
  }

  editMovie(index, newMovie) {
    // Previous implementation
    /*
    let newMovieList = this.state.movieList
        .slice(0, index)
        .concat([newMovieName])
        .concat(this.state.movieList.slice(index+1));

    this.setState({
      movieList: newMovieList
    });
    */

    //Redux Implementation
    store.dispatch(editMovie(index, newMovie));
  }

  deleteMovie(index) {
    // Previous implementation
    /*
    var newMovieList = this.state.movieList
        .slice(0, index)
        .concat(this.state.movieList.slice(index+1));


    this.setState({
      movieList: newMovieList
    });
    */

    //Redux Implementation
    store.dispatch(deleteMovie(index));
  }

  getMovies() {
    let state = store.getState();
    //console.log(state);
    return state.movieAction.movies;
  }

  render() {
    return (
      <div>
        <div><NewMovieForm onSubmit={this.addMovie} /></div>
        <div><MovieList store={store} onEdit={this.editMovie} onDelete={this.deleteMovie} /></div>
      </div>
    )
  }

}

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
