import React from 'react';
import Movie from './../../classes/Movie.js';
import TextInput from './textInput.js';

class MovieForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: this.props.movie.name,
      duration: this.props.movie.duration,
      year: this.props.movie.year,
      index: this.props.movieIndex
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleYearChange = this.handleYearChange.bind(this);
    this.handleDurationChange = this.handleDurationChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  handleYearChange(event) {
    this.setState({year: event.target.value});
  }

  handleDurationChange(event) {
    this.setState({duration: event.target.value});
  }

  handleSubmit(event) {
    this.props.onSubmit(new Movie(this.state.name, this.state.duration, this.state.year), this.state.index);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <TextInput value={this.state.name} onChange={this.handleNameChange} />
          </label>
          <label>
            Duration:
            <TextInput value={this.state.duration} onChange={this.handleDurationChange} />
          </label>
          <label>
            Year:
            <TextInput value={this.state.year} onChange={this.handleYearChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}


export default MovieForm
