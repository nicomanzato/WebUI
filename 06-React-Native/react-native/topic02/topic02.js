import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Dimensions} from 'react-native';
import styles from './styles.js';

export default class Topic02 extends React.Component {
  render() {
/*
<View style={styles.container}>
  <View style={[styles.box, styles.redBox]}></View>
  <View style={[styles.box, styles.whiteBox]}></View>
  <View style={[styles.box, styles.purpleBox]}></View>
</View>
*/
    return (
      <View style={styles.container}>
        <View style={styles.article}>
          <View style={styles.content}>
            <Text style={styles.title}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
              ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </Text>
            <View style={styles.socialNetworkContainer}>
              <Image
                source={require('./favicon.png')}
                style={styles.socialNetworkImage}
              />
              <Image
                source={require('./favicon.png')}
                style={styles.socialNetworkImage}
              />
              <Image
                source={require('./favicon.png')}
                style={styles.socialNetworkImage}
              />
              <Image
                source={require('./favicon.png')}
                style={styles.socialNetworkImage}
              />
            </View>
          </View>
          <Image
            source={require('./image.png')}
            style={styles.articleImg}
          />
        </View>
      </View>
    );
  }
}
