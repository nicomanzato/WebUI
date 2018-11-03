import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Dimensions} from 'react-native';
import styles from './styles.js';

const width = Dimensions.get('window').width; //full width
const height = Dimensions.get('window').height;

export default class Topic02 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.box, styles.smallBox]}></View>
        <View style={[styles.box, styles.mediumBox]}></View>
        <View style={[styles.box, styles.bigBox]}></View>
      </View>
    );
  }
}
