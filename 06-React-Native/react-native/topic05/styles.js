import { StyleSheet, Text, View, ScrollView, Image, Dimensions, Platform} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
  },
  textInput: {
    height: 40,
  },
  post: {
    minHeight: 150,
  },
  postTitle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  postBody: {
  }
});

export default styles
