import { StyleSheet, Text, View, ScrollView, Image, Dimensions, Platform} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignSelf: 'center',
  },
  textInput: {
    height: 40,
  }
});


export default styles
