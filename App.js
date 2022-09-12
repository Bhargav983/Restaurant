import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import Listen from './pages/ListenPage';
import Listen from './pages/ListenJson';
import Map from './pages/MapPage';
import Login from './pages/LoginPage';
import Home from './pages/Home';
const Stack = createStackNavigator();
const MyStack = () => {
   return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Listen" component={Listen} />
          <Stack.Screen name="Map" component={Map} />
      </Stack.Navigator></NavigationContainer>
   );
};
export default MyStack;