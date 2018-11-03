import React from 'react';
import {Text, View, TextInput} from 'react-native';
import styles from './styles.js';

export default class Topic03 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Enter your input here</Text>
        <TextInput
         style={styles.textInput}
         placeholder="Type here to translate!"
         onChangeText={(text) => this.setState({text})}
       />
      </View>
    );
  }
}
