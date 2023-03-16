import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    TouchableNativeFeedback,
    ImageBackground,

} from "react-native";
import COLORS from "../constants/Colors";
import IMAGES from "../constants/Images";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from "@expo/vector-icons";
import { getPoster } from "../services/MovieService";

const MovieCard = ({
        title,
        poster,
        // language,
        voteAverage,
        voteCount,
        // size,
        // heartLess,
        onPress,
        
    }) => {
    const [liked, setLiked] = useState(false);
    // const [voteCountValue, setVoteCountValue] = useState(voteCount);
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
            <ImageBackground
        style={{ ...styles.container, width: 230 , height: 340  }}
        imageStyle={{ borderRadius: 12 }}
        source={{ uri: getPoster(poster) }}
      >
            
            <View style={styles.container}>
                <View style={styles.imdbContainer}>
                    <Image source={IMAGES.IMDB} style={styles.imdbImage} resizeMode="cover" />
                    <Text>{voteAverage}</Text>
                </View>
                <TouchableNativeFeedback onPress={
                    () => setLiked(!liked)
                }>
                    <Ionicons
                        name={liked ? "heart" : "heart-outline"}
                        size={25}
                        color={liked ? COLORS.HEART : COLORS.WHITE}
                        style={{ position: "absolute", bottom: 10, left: 10 }}
                    />
                </TouchableNativeFeedback>
            </View>
            </ImageBackground>
            <View style={styles.movieTitle}>
                <Text style={
                    styles.movieTitle
                } numberOfLines={3} > {title}</Text>
                <View style={
                    styles.movieSubTitleContainer
                }>
                    <Text style={styles.movieSubTitle}>ENGLISH | usa</Text>
                    <View
                        style={styles.rowAndCenter}
                    >
                        <AntDesign name="hearto" size={17}
                            style={styles.imdbRating} />
                        <Text style={styles.movieSubTitle}>{voteCount}</Text>
                    </View>
                </View>

            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 340,
        width: 230,
        borderRadius: 12,
        elevation: 5,
        marginVertical: 2,
    },
    movieTitle: {
        color: COLORS.GRAY,
        paddingVertical: 2,
        marginTop: 5,
        width: 230,
        fontSize: 19,
        fontWeight: "bold",
    },
    movieSubTitleContainer: {
        flexDirection: "row",
        alignItems: "center",

        justifyContent: "space-between",
    },
    movieSubTitle: {
        fontSize: 12,
    },
    rowAndCenter: {
        flexDirection: "row",
        alignItems: "center",
    },
    imdbContainer: {
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "flex-end",
        backgroundColor: COLORS.YELLOW,
        borderBottomLeftRadius: 5,
        borderTopRightRadius: 12,
        paddingVertical: 3,
    },
    imdbImage: {
        height: 20,
        width: 50,
        borderBottomLeftRadius: 5,
    },
    imdbRating: {
        marginRight: 5,
        color: COLORS.HEART,
    },
})

export default MovieCard;



