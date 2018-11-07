import React from 'react';
import {Text, View} from 'react-native';
import AppTouchableOpacity from './../topic03/appTouchableOpacity';

export default class Forms3 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Forms3!</Text>
        <AppTouchableOpacity
          text="Finish"
          type="primary"
          onPress={() => this.props.navigation.navigate('Forms')}
        />
      </View>
    );
  }
}
