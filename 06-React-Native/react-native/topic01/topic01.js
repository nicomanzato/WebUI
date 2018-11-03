import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Topic01 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.red}>
          <Text>This view has a red background</Text>
        </View>
        <View style={styles.bordered}>
          <Text>This view has a border</Text>
        </View>
        <View style={[styles.bordered, styles.red]}>
          <Text>This view has a border and red background</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  red: {
    backgroundColor: 'red',
  },
  bordered: {
    borderWidth: 1,
    borderColor: 'black',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
