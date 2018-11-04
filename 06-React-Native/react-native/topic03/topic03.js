import React from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles.js';
import AppTextInput from './appTextInput.js'

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
        <AppTextInput
         style={styles.textInput}
         placeholder="Type here!"
         type="password"
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
