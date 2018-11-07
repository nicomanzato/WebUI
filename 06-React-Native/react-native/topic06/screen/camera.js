import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera, Permissions } from 'expo';
import styles from './../styles.js';

class CameraScreen extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      hasCameraPermission: null,
      type: Camera.Constants.Type.front,
    };
  }

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  takePicture = () => {
    if (this.camera) {
      this.camera.takePictureAsync()
          .then( (picture) => {
            this.props.navigation.navigate('CameraShowPicture', { picture: picture });
          });
    }
  }

  render = () => {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera ref={ref => { this.camera = ref; }} style={{ flex: 1 }} type={this.state.type}>
            <TouchableOpacity
              style={styles.cameraButton}
              onPress={this.takePicture}>
              <Text
                style={styles.cameraText}>
                {' '}Take Picture{' '}
              </Text>
            </TouchableOpacity>
          </Camera>
        </View>
      );
    }
  }
}

export default CameraScreen
