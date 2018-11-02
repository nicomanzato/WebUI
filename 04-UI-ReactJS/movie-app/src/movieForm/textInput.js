import React from 'react';

class TextInput extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: props.value
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onChange(event);
  }

  render() {
    return (
      <input type="text" value={this.state.name} onChange={this.handleChange} />
    );
  }

}

export default TextInput
