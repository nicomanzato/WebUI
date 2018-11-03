import { StyleSheet, Text, View, ScrollView, Image, Dimensions, Platform} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  article: {
    borderWidth: 1,
    borderColor: 'black',
    flexDirection: 'row',
  },
  articleImg: {
    flex: 1,
    alignSelf: 'center'
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 20
  },
  box: {
    margin: 10,
    borderRadius: 10
  },
  redBox: {
    backgroundColor: 'red',
    height: 100,
    width: 100,
    alignSelf: 'flex-start'
  },
  socialNetworkImage: {
    width: 50,
    height: 50,
    margin: 5
  },
  socialNetworkContainer: {
    flexDirection: 'row'
  },
  purpleBox: {
    backgroundColor: 'purple',
    height: 100,
    width: 100,
    alignSelf: 'flex-end'
  },
  whiteBox: {
    backgroundColor: 'white',
    height: 100,
    width: 100,
    alignSelf: 'center'
  }
});


export default styles
