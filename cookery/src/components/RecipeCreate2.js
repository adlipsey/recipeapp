import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
//import { Constants } from 'expo';
import { Card } from 'react-native-elements'; // 0.18.5
//import "@vector-icons"; // 6.2.2
// You can import from local files
import Form from './RecipeForm2';

// or any pure javascript modules available in npm


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
       
        <Card title="Add Recipes Form">
          <Form />
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  
});
