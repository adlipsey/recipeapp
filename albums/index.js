//Import libarary to help create a component
import React from 'react';
import { Text, AppRegistry } from 'react-native';
import App from './app/index';

//Create a component
const App = () => (
	<Text>Sophia sheref</Text>
	);

//Render it to the device
AppRegistry.registerComponent('albums', () => App);


// import { Root, Tabs } from './config/router';

// class App extends Component {
//   render() {
//     return <Root />;
//   }
// }

// export default App;