import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import COLORS from '../constants/Colors';
import FONTS from '../constants/Fonts';
import GenreCard from '../components/GenreCard';
import ItemSeparator from "../components/ItemSeparator";
import MovieCard from '../components/MovieCard';
import {
  getNowPlayingMovies,
  getUpcomingMovies,
  getAllGenres,
  getPopularMovies
} from "../services/MovieService";
const Home = ({ navigation }) => {
  const [activeGenre, setActiveGenre] = useState("All");
  const [nowPlayingMovies, setNowPlayingMovies] = useState({});
  const [popularMovies, setPopularMovies] = useState({});
  const [upcomingMovies, setUpcomingMovies] = useState({});
  const [genres, setGenres] = useState([{ id: 10110, name: "All" }]);

  useEffect(() => {
    getPopularMovies().then((movieResponse) =>
      setPopularMovies(movieResponse.data)
    );
    getNowPlayingMovies().then((movieResponse) =>
      setNowPlayingMovies(movieResponse.data)
    );
    getUpcomingMovies().then((movieResponse) =>
      setUpcomingMovies(movieResponse.data)
    );
    getAllGenres().then((genreResponse) =>
      setGenres([...genres, ...genreResponse.data.genres])
    );
  }, []);


  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" translucent={false}
        backgroundColor={COLORS.BASIC_BACKGROUND}
      />
      <View style={
        styles.headerContainer
      }>
        <Text style={styles.headerTitle}>popular movies</Text>
        {/* <Text style={styles.headerSubTitle}>view all</Text> */}
      </View>
      {/* <View style={styles.genreListContainer}>
        <FlatList
          data={genres.map((genre) => genre.name)}
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
      </View> */}
      <View>
        <FlatList
          data={popularMovies.results}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={() => <ItemSeparator width={20} />}
          ListHeaderComponent={() => <ItemSeparator width={20} />}
          ListFooterComponent={() => <ItemSeparator width={20} />}
          renderItem={({ item }) => (
            <MovieCard
              title={item.title}
              language={item.original_language} // language is the original language of the movie
              voteAverage={item.vote_average} // voteAverage is the average of the votes
              voteCount={item.vote_count} // voteCount is the number of votes
              poster={item.poster_path} // poster is the path of the poster image
              heartLess={false} // heartLess is a boolean that indicates if the heart button is visible or not
              onPress={() => navigation.navigate("movie", { movieId: item.id })} // onPress is a function that is called when the user touch the button 
            />
          )}
        />
      </View>
      <View style={
        styles.headerContainer
      }>
        <Text style={styles.headerTitle}>New movies</Text>
        {/* <Text style={styles.headerSubTitle}>view all</Text> */}
      </View>
      <View>
        <FlatList
          data={nowPlayingMovies.results}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={() => <ItemSeparator width={20} />}
          ListHeaderComponent={() => <ItemSeparator width={20} />}
          ListFooterComponent={() => <ItemSeparator width={20} />}
          renderItem={({ item }) => (
            <MovieCard
              title={item.title}
              language={item.original_language} // language is the original language of the movie
              voteAverage={item.vote_average} // voteAverage is the average of the votes
              voteCount={item.vote_count} // voteCount is the number of votes
              poster={item.poster_path} // poster is the path of the poster image
              heartLess={false} // heartLess is a boolean that indicates if the heart button is visible or not
              onPress={() => navigation.navigate("movie", { movieId: item.id })} // onPress is a function that is called when the user touch the button 
            />
          )}
        />
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Coming Soon</Text>
        {/* <Text style={styles.headerSubTitle}>VIEW ALL</Text> */}
      </View>
      <View>
        <FlatList
          data={upcomingMovies.results}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={() => <ItemSeparator width={20} />}
          ListHeaderComponent={() => <ItemSeparator width={20} />}
          ListFooterComponent={() => <ItemSeparator width={20} />}
          renderItem={({ item }) => (
            <MovieCard
              title={item.title}
              language={item.original_language}
              voteAverage={item.vote_average}
              voteCount={item.vote_count}
              poster={item.poster_path}
              size={0.6}
              onPress={() => navigation.navigate("movie", { movieId: item.id })}
            />
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
    paddingHorizontal: 20,
  },

});

export default Home;