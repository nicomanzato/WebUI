import React from 'react';
import Movie from './../Movie.js';
import MovieForm from './movieForm.js'

class NewMovieForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      movie: new Movie()
    }
  }

  render() {
    return (
      <div>
        <h2>New Movie</h2>
        <MovieForm movie={this.state.movie} index="-1" onSubmit={this.props.onSubmit} />
      </div>
    );
  }
}

export default NewMovieForm
