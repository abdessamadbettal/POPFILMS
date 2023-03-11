import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView , FlatList } from 'react-native';
import COLORS from '../constants/Colors';
import FONTS from '../constants/Fonts';
import GenreCard from '../components/GenreCard';


const Genres = ["All", "Action", "Comedy", "Romance", "Horror", "sport"];
// home screen
const Home = () => {
  console.log('Hello World');
  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" translucent={false}
        backgroundColor={COLORS.BASIC_BACKGROUND}

      />
      <View style={
        styles.headerContainer
      }>
          <Text style={styles.headerTitle}>New movies</Text>
          <Text style={styles.headerSubTitle}>view all</Text>
      </View>
      <View style={styles.genreListContainer}>
        <FlatList
          data={Genres}
          horizontal
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <GenreCard genreName={item} active={item === "All"} />
          )}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BASIC_BACKGROUND,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: FONTS.BOLD,
    color: COLORS.BLACK,
  },
  headerSubTitle: {
    fontSize: 14,
    fontWeight: FONTS.BOLD,
    color: COLORS.GRAY,

  },

});

export default Home;