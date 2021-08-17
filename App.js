import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import Store from './src/redux/Store';
import MainStackNavigator from './src/navigator/MainStackNavigator';


const App = () => {
  return (
    <Provider store = {Store}>
      <MainStackNavigator />
    </Provider>
    
  );
}

export default App;
