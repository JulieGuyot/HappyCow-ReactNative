import React, { useState } from "react";
import { View, FlatList, Text, StyleSheet, Image } from "react-native";

const Gallery = ({ pictures }) => {
  return (
    <View>
      <FlatList
        data={pictures}
        keyExtractor={(index) => {
          return index;
        }}
        renderItem={({ item, index }) => {
          return (
            <Image
              style={{
                height: 300,
                width: "100%",
                resizeMode: "cover",
                marginBottom: 3,
              }}
              source={{ uri: item }}
            />
          );
        }}
      />
    </View>
  );
};

export default Gallery;
