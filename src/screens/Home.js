import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , ScrollView } from 'react-native';
import COLORS from '../constants/Colors';

// home screen
const  Home = () => {
  console.log('Hello World');
  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" translucent={false}
      backgroundColor={COLORS.BASIC_BACKGROUND}  />
      <Text>POP  films</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.BASIC_BACKGROUND,
    //   paddingTop: 40,
    //   backgroundColor: '#fff',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    },
  });

export default Home;