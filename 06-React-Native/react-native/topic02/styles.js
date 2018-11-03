import { StyleSheet, Text, View, ScrollView, Image, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'skyblue',
    flex: 1
  },
  box: {
    margin: 10,
    borderRadius: 10
  },
  smallBox: {
    backgroundColor: 'red',
    height: 100,
    width: 100
  },
  mediumBox: {
    backgroundColor: 'purple',
    height: 150,
    width: 150
  },
  bigBox: {
    backgroundColor: 'white',
    height: 200,
    width: 200
  }
});


export default styles
