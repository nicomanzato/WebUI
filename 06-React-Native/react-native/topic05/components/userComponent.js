import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './../styles.js';

const UserComponent = (props) => {

  return (
    <View>
      <Text style={styles.postTitle}> { props.user.name } </Text>
      <Text style={styles.postBody}> UserName: { props.user.username } </Text>
      <Text style={styles.postBody}> Email: { props.user.email } </Text>
      <Text style={styles.postBody}> Phone: { props.user.phone } </Text>
    </View>
  );
}

export default UserComponent
