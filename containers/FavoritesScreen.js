import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  AsyncStorage,
  StyleSheet,
  Image,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const FavoriteScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [favorite, setFavorite] = useState([]);
  console.log(favorite);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const stored = await AsyncStorage.getItem("favorite");
        let fav = JSON.parse(stored);
        console.log(fav);
        setIsLoading(false);
        setFavorite(fav);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <View>
      {isLoading ? null : (
        <View>
          <View style={styles.header}>
            <Text style={styles.title}>{"   Mes restaurants favoris   "}</Text>
          </View>
          <ScrollView>
            <View style={styles.list}>
              <FlatList
                windowSize={3}
                data={favorite}
                keyExtractor={(item) => {
                  return String(item.placeId);
                }}
                renderItem={({ item }) => {
                  return (
                    <View style={styles.item}>
                      <Text style={styles.name}>{item.name}</Text>
                      <Text style={styles.description}>{item.description}</Text>
                      <Image
                        style={{
                          height: 150,
                          width: "100%",
                          resizeMode: "cover",
                        }}
                        source={{ uri: item.thumbnail }}
                      />
                    </View>
                  );
                }}
              />
            </View>
          </ScrollView>
        </View>
      )}
    </View>
  );
};
export default FavoriteScreen;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#6D3FAD",
    height: 100,
    paddingTop: 28,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    textAlign: "center",
    color: "white",
    fontSize: 24,
  },
  item: {
    width: "100%",
    alignItems: "center",
    padding: 7,
    paddingBottom: 20,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#444444",
  },
  list: {
    flexWrap: "wrap",
  },
  name: {
    color: "#444444",
    fontSize: 24,
    marginTop: 7,
    marginBottom: 15,
  },
  description: {
    lineHeight: 22,
    color: "#444444",
    paddingBottom: 10,
    textAlign: "justify",
  },
});
