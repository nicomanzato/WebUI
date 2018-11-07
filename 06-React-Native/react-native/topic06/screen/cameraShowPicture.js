import React from 'react';
import {Image,Text , View} from 'react-native';
import styles from './../styles.js';

export default class CameraShowPicture extends React.Component {

  render() {

    let picture = this.props.navigation.getParam('picture', 'NO-PIC');

    return (
      <View style={styles.showPictureContainer}>
        <Image
          style={{width: picture.width, height: picture.height}}
          source={{uri: picture.uri}}
        />
      </View>
    );
  }
}
