import React, { useState } from "react";
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  Image,
  AsyncStorage,
} from "react-native";
import Stars from "../components/Stars";
import Search from "../components/Search";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import Icon from "../components/Icon";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import Filters from "../components/Filters";

const Restaurants = ({ data }) => {
  let favoris = [];
  const navigation = useNavigation();
  const [category, setCategory] = useState(null);
  const [filters, setFilters] = useState(false);
  const [search, setSearch] = useState("");

  const filter = (category, search) => {
    let tab = [];
    if (category === 0) {
      for (let i = 0; i < data.length; i++) {
        if (
          data[i].category === category ||
          data[i].category === category + 11
        ) {
          tab.push(data[i]);
        }
      }
      return tab;
    } else if (category) {
      for (let i = 0; i < data.length; i++) {
        // console.log(data[i].category);
        if (data[i].category === category) {
          tab.push(data[i]);
        }
      }
      return tab;
    } else if (search) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].name === search) {
          tab.push(data[i]);
        }
      }
      return tab;
    } else {
      return data;
    }
  };

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}> {"HappyCow"}</Text>
        <Search search={search} setSearch={setSearch} />
      </View>

      {filters === false ? (
        <View>
          <View style={styles.filters}>
            <TouchableOpacity
              style={styles.oneFilter}
              onPress={() => {
                setCategory(10);
              }}
            >
              <Icon category={10} />
              <Text numberOfLines={1} ellipsizeMode="tail">
                {" "}
                {"Vegan"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.oneFilter}
              onPress={() => {
                setCategory(0);
              }}
            >
              <Icon category={0} />
              <Text numberOfLines={1} ellipsizeMode="tail">
                {" "}
                {"Options végétariennes"}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.oneFilter}
              onPress={() => {
                setCategory(1);
              }}
            >
              <Icon category={1} />
              <Text numberOfLines={1} ellipsizeMode="tail">
                {" "}
                {"Magasin bio / diététique"}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.oneFilter}
              onPress={() => {
                setFilters(true);
              }}
            >
              <Entypo name="sound-mix" size={24} color="gray" />
              <Text> Filtres</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.removeFilters}
            onPress={() => {
              setCategory(null);
            }}
          >
            <Ionicons
              name="md-remove-circle-outline"
              size={18}
              color="#797979"
            />
            <Text style={styles.removeFiltersText}>Effacer les filtres</Text>
          </TouchableOpacity>
          <FlatList
            data={filter(category, search)}
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
                      pictures: item.pictures,
                      thumbnail: item.thumbnail,
                      category: item.category,
                      description: item.description,
                      latitude: item.location.lat,
                      longitude: item.location.lng,
                    });
                  }}
                >
                  <View
                    style={{
                      borderBottomWidth: 0.3,
                      borderBottomColor: "#797979",
                      flexDirection: "row",
                      marginBottom: 10,
                      paddingBottom: 10,
                    }}
                  >
                    <Image
                      style={{ height: 100, width: 100, resizeMode: "cover" }}
                      source={{ uri: item.thumbnail }}
                    />
                    <View style={styles.details}>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Text style={styles.name}>{item.name} </Text>
                        <Icon
                          style={styles.category}
                          category={item.category}
                        />
                      </View>

                      <View
                        flexDirection="row"
                        style={{
                          justifyContent: "space-between",
                          marginRight: 1,
                          marginTop: 2,
                        }}
                      >
                        <View flexDirection="row">
                          <Stars rating={item.rating} />
                          <Text style={{ color: "grey" }}>({item.rating})</Text>
                        </View>

                        <TouchableOpacity
                          style={styles.heart}
                          onPress={async () => {
                            favoris.push(item);
                            let newTab = JSON.stringify(favoris);
                            await AsyncStorage.setItem("favorite", newTab);
                            alert("Ajouté aux favoris");
                          }}
                        >
                          <AntDesign name="heart" size={14} color="#C70039" />
                        </TouchableOpacity>
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
      ) : (
        <View>
          <Filters setFilters={setFilters} setCategory={setCategory} />
        </View>
      )}
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
  filters: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  oneFilter: {
    alignItems: "center",
    justifyContent: "space-around",
    width: 87,
    height: 60,
    borderWidth: 0.3,
    borderColor: "#797979",
    margin: 1,
    borderRadius: 7,
    paddingVertical: 5,
  },
  removeFilters: {
    flexDirection: "row",
    borderBottomWidth: 0.3,
    borderBottomColor: "#797979",
    marginBottom: 10,
    paddingVertical: 5,
    marginLeft: 5,
  },
  removeFiltersText: {
    marginLeft: 5,
    paddingTop: 2,

    fontSize: 13,
  },
});
