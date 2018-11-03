import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

export default class Topic01 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView} horizontal>
          <View style={styles.red}>
            <Text>This view has a red background</Text>
          </View>
          <View style={styles.bordered}>
            <Text>This view has a border</Text>
          </View>
          <View style={[styles.bordered, styles.red]}>
            <Text>This view has a border and red background</Text>
          </View>
        </ScrollView>
        <View>
          <Text>This is a text, <Text style={styles.title}> BUT THIS IS A TITLE </Text> component.</Text>
        </View>
        <View>
          <Image
            style={{width: 50, height: 50}}
            source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
          />
        </View>
        <View>
          <Image
            source={require('./image.gif')}
            style={styles.fullWidth}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20
  },
  scrollView: {
    backgroundColor: 'grey',
    height: 300
  },
  red: {
    backgroundColor: 'red',
    flex: 2
  },
  bordered: {
    borderWidth: 1,
    borderColor: 'black',
  },
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
