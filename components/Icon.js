import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const Icon = ({ category }) => {
  return (
    <View>
      {category === 0 && (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Entypo
            style={{
              width: 18,
              height: 18,
              textAlign: "center",
              padding: 4,
              borderRadius: 9,
              backgroundColor: "#E17877",
              overflow: "hidden",
              marginLeft: 6,
            }}
            name="leaf"
            size={10}
            color="white"
          />
        </View>
      )}
      {category === 1 && (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Entypo
            style={{
              width: 18,
              height: 18,
              textAlign: "center",
              padding: 4,
              borderRadius: 9,
              backgroundColor: "#B59905",
              overflow: "hidden",
              marginLeft: 6,
            }}
            name="shop"
            size={10}
            color="white"
          />
        </View>
      )}
      {category === 2 && (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Entypo
            style={{
              width: 18,
              height: 18,
              textAlign: "center",
              padding: 4,
              borderRadius: 9,
              backgroundColor: "#21820D",
              overflow: "hidden",
              marginLeft: 6,
            }}
            name="shop"
            size={10}
            color="white"
          />
        </View>
      )}

      {category === 3 && (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <MaterialCommunityIcons
            style={{
              width: 18,
              height: 18,
              textAlign: "center",
              padding: 4,
              borderRadius: 9,
              backgroundColor: "#9C722B",
              overflow: "hidden",
              marginLeft: 6,
            }}
            name="cupcake"
            size={10}
            color="white"
          />
        </View>
      )}

      {category === 4 && (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <MaterialCommunityIcons
            style={{
              width: 18,
              height: 18,
              textAlign: "center",
              padding: 4,
              borderRadius: 9,
              backgroundColor: "#1E85A2",
              overflow: "hidden",
              marginLeft: 6,
            }}
            name="bed-empty"
            size={10}
            color="white"
          />
        </View>
      )}
      {category === 5 && (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <MaterialCommunityIcons
            style={{
              width: 18,
              height: 18,
              textAlign: "center",
              padding: 4,
              borderRadius: 9,
              backgroundColor: "#78AA0A",
              overflow: "hidden",
              marginLeft: 6,
            }}
            name="truck"
            size={10}
            color="white"
          />
        </View>
      )}
      {category === 6 && (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <MaterialIcons
            style={{
              width: 18,
              height: 18,
              textAlign: "center",
              padding: 4,
              borderRadius: 9,
              backgroundColor: "#23AFA0",
              overflow: "hidden",
              marginLeft: 6,
            }}
            name="restaurant-menu"
            size={10}
            color="white"
          />
        </View>
      )}
      {category === 7 && (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Octicons
            style={{
              width: 18,
              height: 18,
              textAlign: "center",
              padding: 4,
              borderRadius: 9,
              backgroundColor: "#8F3388",
              overflow: "hidden",
              marginLeft: 6,
            }}
            name="organization"
            size={10}
            color="white"
          />
        </View>
      )}
      {category === 10 && (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Entypo
            style={{
              width: 18,
              height: 18,
              textAlign: "center",
              padding: 4,
              borderRadius: 9,
              backgroundColor: "#21820D",
              overflow: "hidden",
              marginLeft: 6,
            }}
            name="leaf"
            size={10}
            color="white"
          />
        </View>
      )}

      {category === 11 && (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Entypo
            style={{
              width: 18,
              height: 18,
              textAlign: "center",
              padding: 4,
              borderRadius: 9,
              backgroundColor: "#E17877",
              overflow: "hidden",
              marginLeft: 6,
            }}
            name="leaf"
            size={10}
            color="white"
          />
        </View>
      )}
      {category === 12 && (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <MaterialCommunityIcons
            style={{
              width: 18,
              height: 18,
              textAlign: "center",
              padding: 4,
              borderRadius: 9,
              backgroundColor: "#EF447F",
              overflow: "hidden",
              marginLeft: 6,
            }}
            name="ice-cream"
            size={10}
            color="white"
          />
        </View>
      )}
      {category === 13 && (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <MaterialCommunityIcons
            style={{
              width: 18,
              height: 18,
              textAlign: "center",
              padding: 4,
              borderRadius: 9,
              backgroundColor: "#DC5E5C",
              overflow: "hidden",
              marginLeft: 6,
            }}
            name="cup"
            size={10}
            color="white"
          />
        </View>
      )}

      {category === 14 && (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Entypo
            style={{
              width: 18,
              height: 18,
              textAlign: "center",
              padding: 4,
              borderRadius: 9,
              backgroundColor: "#3775C5",
              overflow: "hidden",
              marginLeft: 6,
            }}
            name="leaf"
            size={10}
            color="white"
          />
        </View>
      )}
      {category === 99 && (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Entypo
            style={{
              width: 18,
              height: 18,
              textAlign: "center",
              padding: 4,
              borderRadius: 9,
              backgroundColor: "#3775C5",
              overflow: "hidden",
              marginLeft: 6,
            }}
            name="leaf"
            size={10}
            color="white"
          />
        </View>
      )}
    </View>
  );
};

export default Icon;
