import React, { useState } from "react";
import { View, ScrollView, Image, Text, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/core";
import Stars from "../components/Stars";
import { Octicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import MapView from "react-native-maps";
import { AntDesign } from "@expo/vector-icons";

import Type from "../components/Type";
import Marker from "../components/Marker";
import { TouchableOpacity } from "react-native-gesture-handler";
import Gallery from "../components/Gallery";

export default function RestaurantScreen() {
  const { params } = useRoute();
  const [gallery, setGallery] = useState(false);

  const CustomMarker = () => (
    <View>
      <Marker category={params.category} />
    </View>
  );
  return (
    <View>
      {gallery === false ? (
        <ScrollView>
          <View
            style={
              params.category === 0
                ? styles.zero
                : params.category === 1
                ? styles.one
                : params.category === 2
                ? styles.two
                : params.category === 3
                ? styles.three
                : params.category === 4
                ? styles.four
                : params.category === 5
                ? styles.five
                : params.category === 6
                ? styles.six
                : params.category === 7
                ? styles.seven
                : params.category === 10
                ? styles.ten
                : params.category === 11
                ? styles.eleven
                : params.category === 12
                ? styles.twelve
                : params.category === 13
                ? styles.thirteen
                : styles.ninetyNineteen
            }
          >
            <View style={styles.pictures}>
              <View style={styles.firstPicture}>
                {params.picture1 ? (
                  <Image
                    style={{
                      height: "100%",
                      width: "100%",
                      resizeMode: "cover",
                    }}
                    source={{ uri: params.picture1 }}
                  />
                ) : (
                  <Image
                    style={{
                      height: "100%",
                      width: "100%",
                      resizeMode: "cover",
                    }}
                    source={{ uri: params.thumbnail }}
                  />
                )}
              </View>

              <View style={styles.otherPictures}>
                <Image
                  style={{ height: "50%", width: "100%", resizeMode: "cover" }}
                  source={{ uri: params.picture2 }}
                />
                <TouchableOpacity
                  onPress={() => {
                    setGallery(true);
                  }}
                >
                  <Image
                    style={{
                      height: "78%",
                      width: 100,
                      resizeMode: "cover",
                      marginTop: 3,
                    }}
                    source={{ uri: params.picture3 }}
                  />
                  <View
                    style={{
                      width: 100,
                      height: 100,
                      backgroundColor: "black",
                      position: "absolute",
                      opacity: 0.4,
                    }}
                  ></View>
                  <View
                    style={{
                      position: "absolute",
                      opacity: 0.9,
                      top: 35,
                      left: 25,
                    }}
                  >
                    {params.pictures.length > 3 && (
                      <Text style={{ fontSize: 22, color: "white" }}>
                        {" "}
                        <AntDesign name="plus" size={20} color="white" />
                        <Text>{params.pictures.length - 3}</Text>
                      </Text>
                    )}
                  </View>
                </TouchableOpacity>
              </View>
              <Type category={params.category} />
            </View>

            <View style={styles.allText}>
              <Text style={styles.name}>{params.name}</Text>
              <View flexDirection="row" style={{ alignItems: "center" }}>
                <Stars rating={params.rating} />
                <Text style={styles.rating}>({params.rating}) </Text>
                <View>
                  {params.vegan !== 0 && (
                    <Text style={styles.vegan}>{"vegan"}</Text>
                  )}
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "white",
              paddingBottom: 10,
              borderBottomWidth: 0.5,
              borderBottomColor: "#797979",
            }}
          >
            <View style={styles.icons}>
              <View style={styles.oneIcon}>
                <Octicons name="pencil" size={24} color="#797979" />
              </View>
              <View style={styles.oneIcon}>
                <MaterialCommunityIcons
                  name="camera-plus"
                  size={24}
                  color="#797979"
                />
              </View>
              <View style={styles.oneIcon}>
                <Entypo name="phone" size={24} color="#797979" />
              </View>
            </View>
            <View style={styles.actions}>
              <View>
                <Text style={styles.actionText}>{"AJOUTER UN AVIS"}</Text>
              </View>
              <View>
                <Text style={styles.actionText}>{"AJOUTER UNE PHOTO"}</Text>
              </View>
              <View>
                <Text style={styles.actionText}>{"APPELER"}</Text>
              </View>
            </View>
          </View>

          <View style={styles.details}>
            <Text style={styles.description}>{params.description}</Text>
          </View>

          <MapView
            initialRegion={{
              latitude: params.latitude,
              longitude: params.longitude,
              latitudeDelta: 0.06,
              longitudeDelta: 0.06,
            }}
            style={{ height: 300, width: "100%" }}
          >
            <MapView.Marker
              key={params.id}
              coordinate={{
                latitude: params.latitude,
                longitude: params.longitude,
              }}
            >
              <CustomMarker />
            </MapView.Marker>
          </MapView>
        </ScrollView>
      ) : (
        <Gallery pictures={params.pictures} />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  allText: {
    margin: 13,
    paddingBottom: 20,
  },
  name: {
    color: "white",
    fontSize: 18,
    marginBottom: 5,
    width: 240,
  },
  rating: {
    color: "white",
  },
  pictures: {
    flexDirection: "row",
    height: 200,
    backgroundColor: "white",
  },
  firstPicture: {
    flex: 2,
    marginRight: 3,
  },
  otherPictures: {
    height: 197,
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 10,
  },
  oneIcon: {
    alignItems: "center",
    width: 120,
  },

  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  actionText: {
    textAlign: "center",
    fontSize: 12,
    color: "#444444",
    marginTop: 5,
    width: 110,
  },

  details: {
    backgroundColor: "white",
    padding: 13,
  },

  description: {
    lineHeight: 22,
    color: "#444444",
  },

  zero: {
    backgroundColor: "#E17877",
  },
  one: {
    backgroundColor: "#B59905",
  },
  two: {
    backgroundColor: "#21820D",
  },
  three: {
    backgroundColor: "#9C722B",
  },
  four: {
    backgroundColor: "#1E85A2",
  },
  five: {
    backgroundColor: "#78AA0A",
  },
  six: {
    backgroundColor: "#23AFA0",
  },
  seven: {
    backgroundColor: "#8F3388",
  },
  ten: {
    backgroundColor: "#21820D",
  },
  eleven: {
    backgroundColor: "#E17877",
  },
  twelve: {
    backgroundColor: "#EF447F",
  },
  thirteen: {
    backgroundColor: "#DC5E5C",
  },
  ninetyNineteen: {
    backgroundColor: "#3775C5",
  },
  vegan: {
    color: "grey",
    backgroundColor: "white",
    padding: 2,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 7,
    overflow: "hidden",
    marginLeft: 10,
    paddingHorizontal: 7,
  },
});
