import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Movie screen
const  Movie = () => {
  console.log('Hello movie');
  return (
    <View style={styles.container}>
      <Text>Movies films</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default Movie;