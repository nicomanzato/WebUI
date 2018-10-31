import React from 'react';
import Movie from './Movie.js'

class NewMovieForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      duration: 0,
      year: 0
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
    this.props.onSubmit(new Movie(this.state.name, this.state.duration, this.state.year));
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h2>New Movie</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.name} onChange={this.handleNameChange} />
          </label>
          <label>
            Duration:
            <input type="text" value={this.state.duration} onChange={this.handleDurationChange} />
          </label>
          <label>
            Year:
            <input type="text" value={this.state.year} onChange={this.handleYearChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default NewMovieForm
