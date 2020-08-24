import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const Marker = ({ category }) => {
  return (
    <View>
      {category === 0 && (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Entypo
            style={{
              width: 30,
              height: 30,
              textAlign: "center",
              padding: 8,
              borderRadius: 15,
              backgroundColor: "#E17877",
              overflow: "hidden",
              position: "absolute",
              bottom: 15,
            }}
            name="leaf"
            size={14}
            color="white"
          />
          <View
            style={{
              width: 0,
              height: 0,
              borderLeftWidth: 10,
              borderRightWidth: 10,
              borderTopWidth: 20,
              borderStyle: "solid",
              backgroundColor: "transparent",
              borderLeftColor: "transparent",
              borderRightColor: "transparent",
              borderTopColor: "#E17877",
              bottom: 5,
            }}
          ></View>
        </View>
      )}
      {category === 1 && (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Entypo
            style={{
              width: 30,
              height: 30,
              textAlign: "center",
              padding: 8,
              borderRadius: 15,
              backgroundColor: "#B59905",
              overflow: "hidden",
              position: "absolute",
              bottom: 15,
            }}
            name="shop"
            size={14}
            color="white"
          />
          <View
            style={{
              width: 0,
              height: 0,
              borderLeftWidth: 10,
              borderRightWidth: 10,
              borderTopWidth: 20,
              borderStyle: "solid",
              backgroundColor: "transparent",
              borderLeftColor: "transparent",
              borderRightColor: "transparent",
              borderTopColor: "#B59905",
              bottom: 5,
            }}
          ></View>
        </View>
      )}
      {category === 2 && (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Entypo
            style={{
              width: 30,
              height: 30,
              textAlign: "center",
              padding: 8,
              borderRadius: 15,
              backgroundColor: "#21820D",
              overflow: "hidden",
              position: "absolute",
              bottom: 15,
            }}
            name="shop"
            size={14}
            color="white"
          />
          <View
            style={{
              width: 0,
              height: 0,
              borderLeftWidth: 10,
              borderRightWidth: 10,
              borderTopWidth: 20,
              borderStyle: "solid",
              backgroundColor: "transparent",
              borderLeftColor: "transparent",
              borderRightColor: "transparent",
              borderTopColor: "#21820D",
              bottom: 5,
            }}
          ></View>
        </View>
      )}

      {category === 3 && (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <MaterialCommunityIcons
            style={{
              width: 30,
              height: 30,
              textAlign: "center",
              padding: 8,
              borderRadius: 15,
              backgroundColor: "#9C722B",
              overflow: "hidden",
              position: "absolute",
              bottom: 15,
            }}
            name="cupcake"
            size={14}
            color="white"
          />
          <View
            style={{
              width: 0,
              height: 0,
              borderLeftWidth: 10,
              borderRightWidth: 10,
              borderTopWidth: 20,
              borderStyle: "solid",
              backgroundColor: "transparent",
              borderLeftColor: "transparent",
              borderRightColor: "transparent",
              borderTopColor: "#9C722B",
              bottom: 5,
            }}
          ></View>
        </View>
      )}

      {category === 4 && (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <MaterialCommunityIcons
            style={{
              width: 30,
              height: 30,
              textAlign: "center",
              padding: 8,
              borderRadius: 15,
              backgroundColor: "#1E85A2",
              overflow: "hidden",
              position: "absolute",
              bottom: 15,
            }}
            name="bed-empty"
            size={14}
            color="white"
          />
          <View
            style={{
              width: 0,
              height: 0,
              borderLeftWidth: 10,
              borderRightWidth: 10,
              borderTopWidth: 20,
              borderStyle: "solid",
              backgroundColor: "transparent",
              borderLeftColor: "transparent",
              borderRightColor: "transparent",
              borderTopColor: "#1E85A2",
              bottom: 5,
            }}
          ></View>
        </View>
      )}
      {category === 5 && (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <MaterialCommunityIcons
            style={{
              width: 30,
              height: 30,
              textAlign: "center",
              padding: 9,
              borderRadius: 15,
              backgroundColor: "#78AA0A",
              overflow: "hidden",
              position: "absolute",
              bottom: 15,
            }}
            name="truck"
            size={14}
            color="white"
          />
          <View
            style={{
              width: 0,
              height: 0,
              borderLeftWidth: 10,
              borderRightWidth: 10,
              borderTopWidth: 20,
              borderStyle: "solid",
              backgroundColor: "transparent",
              borderLeftColor: "transparent",
              borderRightColor: "transparent",
              borderTopColor: "#78AA0A",
              bottom: 5,
            }}
          ></View>
        </View>
      )}
      {category === 6 && (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <MaterialIcons
            style={{
              width: 30,
              height: 30,
              textAlign: "center",
              padding: 8,
              borderRadius: 15,
              backgroundColor: "#23AFA0",
              overflow: "hidden",
              position: "absolute",
              bottom: 15,
            }}
            name="restaurant-menu"
            size={14}
            color="white"
          />
          <View
            style={{
              width: 0,
              height: 0,
              borderLeftWidth: 10,
              borderRightWidth: 10,
              borderTopWidth: 20,
              borderStyle: "solid",
              backgroundColor: "transparent",
              borderLeftColor: "transparent",
              borderRightColor: "transparent",
              borderTopColor: "#23AFA0",
              bottom: 5,
            }}
          ></View>
        </View>
      )}
      {category === 7 && (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Octicons
            style={{
              width: 30,
              height: 30,
              textAlign: "center",
              padding: 8,
              borderRadius: 15,
              backgroundColor: "#8F3388",
              overflow: "hidden",
              position: "absolute",
              bottom: 15,
            }}
            name="organization"
            size={14}
            color="white"
          />
          <View
            style={{
              width: 0,
              height: 0,
              borderLeftWidth: 10,
              borderRightWidth: 10,
              borderTopWidth: 20,
              borderStyle: "solid",
              backgroundColor: "transparent",
              borderLeftColor: "transparent",
              borderRightColor: "transparent",
              borderTopColor: "#8F3388",
              bottom: 5,
            }}
          ></View>
        </View>
      )}
      {category === 10 && (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Entypo
            style={{
              width: 30,
              height: 30,
              textAlign: "center",
              padding: 8,
              borderRadius: 15,
              backgroundColor: "#21820D",
              overflow: "hidden",
              position: "absolute",
              bottom: 15,
            }}
            name="leaf"
            size={14}
            color="white"
          />
          <View
            style={{
              width: 0,
              height: 0,
              borderLeftWidth: 10,
              borderRightWidth: 10,
              borderTopWidth: 20,
              borderStyle: "solid",
              backgroundColor: "transparent",
              borderLeftColor: "transparent",
              borderRightColor: "transparent",
              borderTopColor: "#21820D",
              bottom: 5,
            }}
          ></View>
        </View>
      )}

      {category === 11 && (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Entypo
            style={{
              width: 30,
              height: 30,
              textAlign: "center",
              padding: 8,
              borderRadius: 15,
              backgroundColor: "#E17877",
              overflow: "hidden",
              position: "absolute",
              bottom: 15,
            }}
            name="leaf"
            size={14}
            color="white"
          />
          <View
            style={{
              width: 0,
              height: 0,
              borderLeftWidth: 10,
              borderRightWidth: 10,
              borderTopWidth: 20,
              borderStyle: "solid",
              backgroundColor: "transparent",
              borderLeftColor: "transparent",
              borderRightColor: "transparent",
              borderTopColor: "#E17877",
              bottom: 5,
            }}
          ></View>
        </View>
      )}
      {category === 12 && (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <MaterialCommunityIcons
            style={{
              width: 30,
              height: 30,
              textAlign: "center",
              padding: 8,
              borderRadius: 15,
              backgroundColor: "#EF447F",
              overflow: "hidden",
              position: "absolute",
              bottom: 15,
            }}
            name="ice-cream"
            size={14}
            color="white"
          />
          <View
            style={{
              width: 0,
              height: 0,
              borderLeftWidth: 10,
              borderRightWidth: 10,
              borderTopWidth: 20,
              borderStyle: "solid",
              backgroundColor: "transparent",
              borderLeftColor: "transparent",
              borderRightColor: "transparent",
              borderTopColor: "#EF447F",
              bottom: 5,
            }}
          ></View>
        </View>
      )}
      {category === 13 && (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <MaterialCommunityIcons
            style={{
              width: 30,
              height: 30,
              textAlign: "center",
              padding: 8,
              borderRadius: 15,
              backgroundColor: "#DC5E5C",
              overflow: "hidden",
              position: "absolute",
              bottom: 15,
            }}
            name="cup"
            size={14}
            color="white"
          />
          <View
            style={{
              width: 0,
              height: 0,
              borderLeftWidth: 10,
              borderRightWidth: 10,
              borderTopWidth: 20,
              borderStyle: "solid",
              backgroundColor: "transparent",
              borderLeftColor: "transparent",
              borderRightColor: "transparent",
              borderTopColor: "#DC5E5C",
              bottom: 5,
            }}
          ></View>
        </View>
      )}

      {category === 14 && (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Entypo
            style={{
              width: 30,
              height: 30,
              textAlign: "center",
              padding: 9,
              borderRadius: 15,
              backgroundColor: "#3775C5",
              overflow: "hidden",
              position: "absolute",
              bottom: 15,
            }}
            name="leaf"
            size={14}
            color="white"
          />
          <View
            style={{
              width: 0,
              height: 0,
              borderLeftWidth: 10,
              borderRightWidth: 10,
              borderTopWidth: 20,
              borderStyle: "solid",
              backgroundColor: "transparent",
              borderLeftColor: "transparent",
              borderRightColor: "transparent",
              borderTopColor: "#3775C5",
              bottom: 5,
            }}
          ></View>
        </View>
      )}
      {category === 99 && (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Entypo
            style={{
              width: 30,
              height: 30,
              textAlign: "center",
              padding: 8,
              borderRadius: 15,
              backgroundColor: "#3775C5",
              overflow: "hidden",
              position: "absolute",
              bottom: 15,
            }}
            name="leaf"
            size={14}
            color="white"
          />
          <View
            style={{
              width: 0,
              height: 0,
              borderLeftWidth: 10,
              borderRightWidth: 10,
              borderTopWidth: 20,
              borderStyle: "solid",
              backgroundColor: "transparent",
              borderLeftColor: "transparent",
              borderRightColor: "transparent",
              borderTopColor: "#3775C5",
              bottom: 5,
            }}
          ></View>
        </View>
      )}
    </View>
  );
};

export default Marker;
