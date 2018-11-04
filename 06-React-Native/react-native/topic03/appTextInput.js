import React from 'react';
import {TextInput} from 'react-native';

const AppTextInput = (props) => {

  switch(props.type){
    case 'password': return (
      <TextInput
        style={props.style}
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
        secureTextEntry={true}
        value={props.value}
      />
    );

    default: return (
      <TextInput
        style={props.style}
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
        value={props.value}
      />
    );
  }
}

export default AppTextInput
