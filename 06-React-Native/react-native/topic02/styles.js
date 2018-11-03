import { StyleSheet, Text, View, ScrollView, Image, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'skyblue',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  box: {
    margin: 10,
    borderRadius: 10
  },
  redBox: {
    backgroundColor: 'red',
    height: 100,
    width: 100
  },
  purpleBox: {
    backgroundColor: 'purple',
    height: 100,
    width: 100
  },
  whiteBox: {
    backgroundColor: 'white',
    height: 100,
    width: 100
  }
});


export default styles
