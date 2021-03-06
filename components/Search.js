import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import { FontAwesome5 } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

const Search = ({ search, setSearch }) => {
  return (
    <View style={styles.searchSection}>
      <EvilIcons style={styles.search} name="search" size={24} color="grey" />
      <TextInput
        style={styles.headerInput}
        placeholder="Rechercher un restaurant"
        placeholderTextColor="grey"
        onChangeText={(text) => {
          setSearch(text);
        }}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchSection: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 5,
    marginTop: 10,
    borderRadius: 6,
    width: 360,
  },
  headerInput: {
    backgroundColor: "white",
  },
  search: {
    marginRight: 6,
  },
});
