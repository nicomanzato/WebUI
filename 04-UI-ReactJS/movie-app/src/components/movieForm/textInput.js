import React from 'react';

class TextInput extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: this.props.value
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    })
    this.props.onChange(event);
  }

  render() {
    return (
      <input type="text" value={this.state.value} onChange={this.handleChange} />
    );
  }

}

export default TextInput
