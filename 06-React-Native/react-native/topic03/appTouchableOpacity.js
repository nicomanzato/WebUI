import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles.js';

const AppTouchableOpacity = (props) => {

  switch(props.type){
    case 'primary': return (
      <TouchableOpacity
        style={[styles.button, styles.primaryButton]}
        onPress={props.onPress}
      >
        <Text style={styles.primaryButtonText}>{props.text}</Text>
      </TouchableOpacity>
    );

    case 'secundary': return (
      <TouchableOpacity
        style={[styles.button, styles.secundaryButton]}
        onPress={props.onPress}
      >
        <Text style={styles.secundaryButtonText}>{props.text}</Text>
      </TouchableOpacity>
    );

    case 'disabled': return (
      <TouchableOpacity
        style={[styles.button, styles.disabledButton]}
      >
        <Text style={styles.disabledButtonText}>{props.text}</Text>
      </TouchableOpacity>
    );

    default: return (
      <TouchableOpacity
        style={styles.button}
        onPress={props.onPress}
      >
        <Text>{props.text}</Text>
      </TouchableOpacity>
    );
  }
}

export default AppTouchableOpacity
