//Imports dependencies
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import Thunk from 'redux-thunk';
import reducers from './src/reducers';
import Router from './src/Router';

//Creates App component
class App extends Component {

  //Establishes link to Firebase when App loads
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCOPN9S8T35Nsf2V7cGRnMjIjtNh3EylpI',
      authDomain: 'cookery-865ff.firebaseapp.com',
      databaseURL: 'https://cookery-865ff.firebaseio.com',
      projectId: 'cookery-865ff',
      storageBucket: 'cookery-865ff.appspot.com',
      messagingSenderId: '197786513690'
    };

    firebase.initializeApp(config);
  }

  //What is rendered to the screen:
  render() {
    return (
      //Provider, the go-between for React and Redux, creates store,
      //imports reducers, and applies Redux-Thunk for using promises
      <Provider 
        store={createStore(reducers, { }, applyMiddleware(Thunk))}
      >
        {/* Router component determines which 'page' of app is shown */}
        <Router />
      </Provider>
    );
  }
}

//Exports App
export default App;

/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
*/

//Layout for Recipe List 
import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
 
export default class GridLayout extends Component {
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.row}>
            <View style={[styles.box, styles.box2]}></View>            
          </View>
           
          <View style={styles.row}>
            <View style={[styles.box, styles.box2]}></View>
            
          </View>
 
          <View style={styles.row}>
            <View style={[styles.box, styles.box]}></View>
           
          <View style={[styles.box, styles.box3]}></View>
          </View>

          <View style={styles.row}>
            <View style={[styles.box, styles.box]}></View>
           
          <View style={[styles.box, styles.box3]}></View>
          </View>

          <View style={styles.row}>
            <View style={[styles.box, styles.box2]}></View>
          </View>

          <View style={styles.row}>
            <View style={[styles.box]}></View>
          </View>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  row: {
    
    flexDirection: 'row',
    marginBottom: 10
  },
  box: {
   flex: 1,
    backgroundColor: 'aqua',
  },

  box2: {
    height: 105,
    backgroundColor: 'blue'

  },
  box3: {
    height: 156,
    backgroundColor: 'purple'
  },
  
  two: {
  
    height:105,
    flex: 2
  }
});
