import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Home} from './src/scenes/home';
import {store} from './src/store/store';
import {Provider as ReduxProvider} from 'react-redux';

export const SCREENS = {
  Home: {
    screen: Home,
    title: '🆕 Home',
  },
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
};
export default App;
