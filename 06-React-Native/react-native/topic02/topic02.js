import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Dimensions} from 'react-native';
import styles from './styles.js';

export default class Topic02 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.box, styles.redBox]}></View>
        <View style={[styles.box, styles.whiteBox]}></View>
        <View style={[styles.box, styles.purpleBox]}></View>
      </View>
    );
  }
}
