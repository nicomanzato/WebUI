import { StyleSheet, Text, View, ScrollView, Image, Dimensions, Platform} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    height: 40,
  },
  postList: {
    maxHeight: height - 100
  },
  post: {
    minHeight: 150,
  },
  postTitle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  postBody: {
  },
  loadingIndicator: {
  },
  cameraButton: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  cameraText: {
    fontSize: 18,
    marginBottom: 10,
    color: 'white'
  },
  showPictureContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default styles
