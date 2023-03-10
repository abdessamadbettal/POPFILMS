import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/Home';
import Movie from './src/screens/Movie';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const  App = () => {
  console.log('Hello World');
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={Home}
          options={{
            headerShown: false,
          }}
         />
        <Stack.Screen name="movie" component={Movie} 
        options={{
          headerShown: false,
        }} />
        {/* <Stack.Screen name="Details" component={Details} /> */}
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}

export default App;

