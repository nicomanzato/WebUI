import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles.js';
import { createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppTextInput from './../topic03/appTextInput.js'
import AppTouchableOpacity from './../topic03/appTouchableOpacity';

class Forms extends React.Component {
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
      </View>
    );
  }
}

class Other extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Other!</Text>
      </View>
    );
  }
}

export default createBottomTabNavigator({
  Forms: Forms,
  Other: Other,
},{
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      switch(routeName){
        case "Forms": {
          iconName = "ios-cloud-outline";
          break;
        }
        case "Other": {
          iconName = "ios-cafe";
          break;
        }
        default: {
          iconName = "ios-car"
        }
      }
      return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
});
