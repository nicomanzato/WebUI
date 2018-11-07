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
  },
  button: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 50,
    margin: 10
  },
  primaryButton: {
    backgroundColor: 'darkcyan',
  },
  primaryButtonText: {
    color: 'white'
  },
  secundaryButton: {
    borderWidth: 1,
    borderColor: 'grey'
  },
  secundaryButtonText: {
    color: 'grey'
  },
  disabledButton: {
    borderColor: 'rgba(80,80,80,0.3)',
    borderWidth: 1,
  },
  disabledButtonText: {
    color: 'rgba(80,80,80,0.3)'
  },
});


export default styles
