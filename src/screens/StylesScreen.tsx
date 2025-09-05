import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  button: {
    padding: 10,
    margin: 15,
    width: '80%',
    backgroundColor: 'black',
    borderColor: 'orange',
    borderWidth: 2,
    borderRadius: 50
  },
  text: {
    padding: 15,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  },
  image: {
    margin: 20,
    height: 200,
    width: 200,
    borderColor: 'orange',
    borderWidth: 3,
    borderRadius: 100  
  }
});