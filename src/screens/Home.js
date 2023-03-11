import { StatusBar } from 'expo-status-bar';
import React , {useState , useEffect} from 'react';
import { StyleSheet, Text, View, ScrollView , FlatList } from 'react-native';
import COLORS from '../constants/Colors';
import FONTS from '../constants/Fonts';
import GenreCard from '../components/GenreCard';
import ItemSeparator from "../components/ItemSeparator";
import MovieCard from '../components/MovieCard';

const Genres = ["All", "Action", "Comedy", "Romance", "Horror", "sport"];
// home screen
const Home = () => {
  const [activeGenre, setActiveGenre] = useState("All");


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
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item} // item is the genre name
          ItemSeparatorComponent={() => <ItemSeparator width={20} />}
          renderItem={({ item }) => (

            <GenreCard genreName={item}
            active={item === activeGenre ? true : false}
            onPress={setActiveGenre} />  // onPress is a function that is called when the user touch the button
          )}
        />
      </View>
      <View style={styles.genreListContainer}>
      <FlatList
          data={Genres}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item} // item is the genre name
          ItemSeparatorComponent={() => <ItemSeparator width={20} />}
          renderItem={({ item }) => (

            <MovieCard /> // onPress is a function that is called when the user touch the button
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
  genreListContainer: {
    // paddingVertical: 10,
    paddingHorizontal: 20,
  },

});

export default Home;