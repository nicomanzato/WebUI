import React from 'react';
import {Text, View} from 'react-native';
import AppTouchableOpacity from './../topic03/appTouchableOpacity';

export default class Forms2 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Forms2!</Text>
          <AppTouchableOpacity
            text="Next"
            type="primary"
            onPress={() => this.props.navigation.navigate('Forms3')}
          />
      </View>

    );
  }
}
