import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/Home';
import Movie from './src/screens/Movie';
// import { useFonts } from "expo-font";
// import AppLoading from "expo-app-loading";
// import * as SplashScreen from 'expo-splash-screen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const  App = () => {
  // const [fontLoaded] = useFonts({
  //   Regular: require("./assets/fonts/NunitoSans-Regular.ttf"),
  //   Bold: require("./assets/fonts/NunitoSans-Bold.ttf"),
  //   Black: require("./assets/fonts/NunitoSans-Black.ttf"),
  //   ExtraBold: require("./assets/fonts/NunitoSans-ExtraBold.ttf"),
  //   ExtraLight: require("./assets/fonts/NunitoSans-ExtraLight.ttf"),
  //   Light: require("./assets/fonts/NunitoSans-Light.ttf"),
  //   SemiBold: require("./assets/fonts/NunitoSans-SemiBold.ttf"),
  // });
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

