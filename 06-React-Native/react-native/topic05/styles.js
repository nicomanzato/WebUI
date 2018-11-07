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
  }
});

export default styles
