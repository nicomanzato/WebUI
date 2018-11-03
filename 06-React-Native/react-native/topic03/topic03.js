import React from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles.js';

export default class Topic03 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };

    this.handleClearButtonPress = this.handleClearButtonPress.bind(this);
  }

  handleClearButtonPress(input) {
    this.setState({
      text: ''
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Enter your input here</Text>
        <TextInput
         style={styles.textInput}
         placeholder="Type here!"
         onChangeText={(text) => this.setState({text})}
         value={this.state.text}
        />
        <TouchableOpacity
          title="Clear Text"
          style={styles.button}
          onPress={this.handleClearButtonPress}
        >
          <Text> Press here to Clear </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
