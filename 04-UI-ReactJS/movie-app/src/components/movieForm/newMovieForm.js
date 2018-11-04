import React from 'react';
import { connect } from 'react-redux'
import Movie from './../../classes/Movie.js';
import MovieForm from './movieForm.js'
import { addMovie } from './../../actions'

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

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (movie) => { dispatch(addMovie(movie)) }
  }
}
export default connect(
  null,
  mapDispatchToProps
)(NewMovieForm)
