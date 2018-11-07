import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './../styles.js';

const PostComponent = (props) => {

  return (
    <View>
      <Text style={styles.postTitle}> { props.title } </Text>
      <Text style={styles.postBody}> { props.body } </Text>
    </View>
  );
}

export default PostComponent
