import React from 'react';

class EditMovieForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      index: this.props.movieIndex
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.props.onSubmit(this.state.index, this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Edit" />
        </form>
      </div>
    );
  }
}

export default EditMovieForm
