import React from "react";
import { TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";
import COLORS from "../constants/Colors";
import FONTS from "../constants/Fonts";

const { width } = Dimensions.get("screen");

const setWidth = (w) => (width / 100) * w;

const GenreCard = ({ genreName, active, onPress }) => {
  return (
    <TouchableOpacity // c-a-d clickable and touchable  (like a button)
      style={{
        ...styles.container,
        backgroundColor: active ? COLORS.ACTIVE : COLORS.WHITE,
      }}
      activeOpacity={0.5} // opacity when the user touch the button
      onPress={() => onPress(genreName)} // onPress is a function that is called when the user touch the button
    >
      <Text
        style={{
          ...styles.genreText,
          color: active ? COLORS.WHITE : COLORS.BLACK,
        }}
      >
        {genreName}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: COLORS.WHITE,
    paddingVertical: 8,
    elevation: 3,
    marginVertical: 2,
    width: setWidth(25),
  },
  genreText: {
    fontSize: 13,
    color: COLORS.ACTIVE,
    fontWeight: FONTS.BOLD,
  },
});

export default GenreCard;