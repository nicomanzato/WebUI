import React from 'react';
import {Image,Text , View} from 'react-native';

export default class CameraShowPicture extends React.Component {

  render() {

    let picture = this.props.navigation.getParam('picture', 'NO-PIC');

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image
          style={{width: picture.width, height: picture.height}}
          source={{uri: picture.uri}}
        />
      </View>
    );
  }
}
