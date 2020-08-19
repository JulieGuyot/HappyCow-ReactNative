import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import { FontAwesome5 } from "@expo/vector-icons";

const Search = () => {
  const [around, setAround] = useState("");
  return (
    <View style={styles.searchSection}>
      <FontAwesome5
        style={styles.compass}
        name="compass"
        size={24}
        color="grey"
      />
      <TextInput
        style={styles.headerInput}
        placeholder="A proximité"
        placeholderTextColor="grey"
        onChangeText={(text) => {
          setAround(text);
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
  compass: {
    marginRight: 6,
  },
});
