import React from 'react';
import Movie from './../../classes/Movie.js';
import MovieForm from './movieForm.js'

class NewMovieForm extends React.Component {
  render() {
    return (
      <div>
        <h2>New Movie</h2>
        <MovieForm movie={new Movie()} index="-1" onSubmit={this.props.onSubmit} />
      </div>
    );
  }
}

export default NewMovieForm
