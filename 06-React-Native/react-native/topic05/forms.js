import AppTextInput from './../topic03/appTextInput.js'
import AppTouchableOpacity from './../topic03/appTouchableOpacity';
import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles.js';

export default class Forms extends React.Component {
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
        <AppTouchableOpacity
          text="Clear Text"
          onPress={this.handleClearButtonPress}
        />

        <AppTouchableOpacity
          text="Primary Button"
          type="primary"
          onPress={this.handleClearButtonPress}
        />
        <AppTouchableOpacity
          text="Secundary Button"
          type="secundary"
          onPress={this.handleClearButtonPress}
        />
        <AppTouchableOpacity
          text="Disabled Button"
          type="secundary"
          disabled
        />
      <AppTouchableOpacity
            text="Next"
            type="primary"
            onPress={() => this.props.navigation.navigate('Posts')}
          />
      </View>
    );
  }
}
