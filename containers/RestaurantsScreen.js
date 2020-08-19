import React from "react";
import { StyleSheet, FlatList, Text, View, Image } from "react-native";
import Stars from "../components/Stars";
import Search from "../components/Search";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Restaurants = ({ data }) => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}> {"HappyCow"}</Text>
        <Search />
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => {
          return String(item.placeId);
        }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("restaurant", {
                  id: item.pladeId,
                  name: item.name,
                  rating: item.rating,
                  vegan: item.vegan,
                  picture1: item.pictures[0],
                  picture2: item.pictures[1],
                  picture3: item.pictures[2],
                  thumbnail: item.thumbnail,
                  category: item.category,
                  description: item.description,
                  latitude: item.location.lat,
                  longitude: item.location.lng,
                });
              }}
            >
              <View style={{ flexDirection: "row", marginBottom: 10 }}>
                <Image
                  style={{ height: 100, width: 100, resizeMode: "cover" }}
                  source={{ uri: item.thumbnail }}
                />
                <View style={styles.details}>
                  <Text style={styles.name}>{item.name}</Text>
                  <View flexDirection="row">
                    <Stars rating={item.rating} />
                    <Text style={{ color: "grey" }}>({item.rating})</Text>
                  </View>
                  <Text numberOfLines={2} ellipsizeMode="tail">
                    {item.description}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
export default Restaurants;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  header: {
    backgroundColor: "#6D3FAD",
    height: 120,
    paddingTop: 28,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    color: "white",
    fontSize: 20,
  },
  details: {
    width: 280,
    padding: 7,
  },
  name: {
    fontSize: 16,
  },
});
