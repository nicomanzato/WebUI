import React from 'react';
import MovieForm from './movieForm.js';

class EditMovieForm extends React.Component {
  render() {
    return (
      <div>
        <MovieForm movie={this.props.movie} movieIndex={this.props.movieIndex} onSubmit={this.props.onSubmit} />
      </div>
    );
  }
}

export default EditMovieForm
