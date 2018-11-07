import { StyleSheet, Text, View, ScrollView, Image, Dimensions, Platform} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default styles
