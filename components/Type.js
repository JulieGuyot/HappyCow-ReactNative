import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const Type = ({ category }) => {
  return (
    <View style={styles.element}>
      {category === 0 && (
        <View style={styles.category}>
          <Entypo
            style={{
              width: 50,
              height: 50,
              textAlign: "center",
              padding: 12,
              borderRadius: 25,
              borderWidth: 2,
              borderColor: "white",
              backgroundColor: "#E17877",
              overflow: "hidden",
              left: 25,
              marginBottom: 10,
            }}
            name="leaf"
            size={24}
            color="white"
          />
          <Text style={styles.option}>{"Options végétariennes"}</Text>
        </View>
      )}
      {category === 1 && (
        <View style={styles.category}>
          <Entypo
            style={{
              width: 50,
              height: 50,
              textAlign: "center",
              padding: 10,
              borderRadius: 25,
              borderWidth: 2,
              borderColor: "white",
              backgroundColor: "#B59905",
              overflow: "hidden",
              left: 25,
              marginBottom: 10,
            }}
            name="shop"
            size={24}
            color="white"
          />
          <Text style={styles.option}>{"Magasin bio / diététique"}</Text>
        </View>
      )}
      {category === 2 && (
        <View style={styles.category}>
          <Entypo
            style={{
              width: 50,
              height: 50,
              textAlign: "center",
              padding: 10,
              borderRadius: 25,
              borderWidth: 2,
              borderColor: "white",
              backgroundColor: "#21820D",
              overflow: "hidden",
              left: 25,
              marginBottom: 10,
            }}
            name="shop"
            size={24}
            color="white"
          />
          <Text style={styles.option}>{"Magasin vegan"}</Text>
        </View>
      )}

      {category === 3 && (
        <View style={styles.category}>
          <MaterialCommunityIcons
            style={{
              width: 50,
              height: 50,
              textAlign: "center",
              padding: 10,
              borderRadius: 25,
              borderWidth: 2,
              borderColor: "white",
              backgroundColor: "#9C722B",
              overflow: "hidden",
              left: 25,
              marginBottom: 10,
            }}
            name="cupcake"
            size={24}
            color="white"
          />
          <Text style={styles.option}>{"Boulangerie"}</Text>
        </View>
      )}

      {category === 4 && (
        <View style={styles.category}>
          <MaterialCommunityIcons
            style={{
              width: 50,
              height: 50,
              textAlign: "center",
              padding: 10,
              borderRadius: 25,
              borderWidth: 2,
              borderColor: "white",
              backgroundColor: "#1E85A2",
              overflow: "hidden",
              left: 25,
              marginBottom: 10,
            }}
            name="bed-empty"
            size={24}
            color="white"
          />
          <Text style={styles.option}>{"Hôtel"}</Text>
        </View>
      )}
      {category === 5 && (
        <View style={styles.category}>
          <MaterialCommunityIcons
            style={{
              width: 50,
              height: 50,
              textAlign: "center",
              padding: 10,
              borderRadius: 25,
              borderWidth: 2,
              borderColor: "white",
              backgroundColor: "#78AA0A",
              overflow: "hidden",
              left: 25,
              marginBottom: 10,
            }}
            name="truck"
            size={24}
            color="white"
          />
          <Text style={styles.option}>{"Livraison"}</Text>
        </View>
      )}
      {category === 6 && (
        <View style={styles.category}>
          <MaterialIcons
            style={{
              width: 50,
              height: 50,
              textAlign: "center",
              padding: 10,
              borderRadius: 25,
              borderWidth: 2,
              borderColor: "white",
              backgroundColor: "#23AFA0",
              overflow: "hidden",
              left: 25,
              marginBottom: 10,
            }}
            name="restaurant-menu"
            size={24}
            color="white"
          />
          <Text style={styles.option}>{"Restauration"}</Text>
        </View>
      )}
      {category === 7 && (
        <View style={styles.category}>
          <Octicons
            style={{
              width: 50,
              height: 50,
              textAlign: "center",
              padding: 10,
              borderRadius: 25,
              borderWidth: 2,
              borderColor: "white",
              backgroundColor: "#8F3388",
              overflow: "hidden",
              left: 25,
              marginBottom: 10,
            }}
            name="organization"
            size={24}
            color="white"
          />
          <Text style={styles.option}>{"Organisation"}</Text>
        </View>
      )}
      {category === 10 && (
        <View style={styles.category}>
          <Entypo
            style={{
              width: 50,
              height: 50,
              textAlign: "center",
              padding: 10,
              borderRadius: 25,
              borderWidth: 2,
              borderColor: "white",
              backgroundColor: "#21820D",
              overflow: "hidden",
              left: 25,
              marginBottom: 10,
            }}
            name="leaf"
            size={24}
            color="white"
          />
          <Text style={styles.option}>{"Vegan"}</Text>
        </View>
      )}

      {category === 11 && (
        <View style={styles.category}>
          <Entypo
            style={{
              width: 50,
              height: 50,
              textAlign: "center",
              padding: 10,
              borderRadius: 25,
              borderWidth: 2,
              borderColor: "white",
              backgroundColor: "#E17877",
              overflow: "hidden",
              left: 25,
              marginBottom: 10,
            }}
            name="leaf"
            size={24}
            color="white"
          />
          <Text style={styles.option}>{"Options végétariennes"}</Text>
        </View>
      )}
      {category === 12 && (
        <View style={styles.category}>
          <MaterialCommunityIcons
            style={{
              width: 50,
              height: 50,
              textAlign: "center",
              padding: 10,
              borderRadius: 25,
              borderWidth: 2,
              borderColor: "white",
              backgroundColor: "#EF447F",
              overflow: "hidden",
              left: 25,
              marginBottom: 10,
            }}
            name="ice-cream"
            size={24}
            color="white"
          />
          <Text style={styles.option}>{"Glaces"}</Text>
        </View>
      )}
      {category === 13 && (
        <View style={styles.category}>
          <MaterialCommunityIcons
            style={{
              width: 50,
              height: 50,
              textAlign: "center",
              padding: 10,
              borderRadius: 25,
              borderWidth: 2,
              borderColor: "white",
              backgroundColor: "#DC5E5C",
              overflow: "hidden",
              left: 25,
              marginBottom: 10,
            }}
            name="cup"
            size={24}
            color="white"
          />
          <Text style={styles.option}>{"Bar à jus"}</Text>
        </View>
      )}

      {category === 14 && (
        <View style={styles.category}>
          <Entypo
            style={{
              width: 50,
              height: 50,
              textAlign: "center",
              padding: 10,
              borderRadius: 25,
              borderWidth: 2,
              borderColor: "white",
              backgroundColor: "#3775C5",
              overflow: "hidden",
              left: 25,
              marginBottom: 10,
            }}
            name="leaf"
            size={24}
            color="white"
          />
          <Text style={styles.option}>{"Autres"}</Text>
        </View>
      )}
      {category === 99 && (
        <View style={styles.category}>
          <Entypo
            style={{
              width: 50,
              height: 50,
              textAlign: "center",
              padding: 10,
              borderRadius: 25,
              borderWidth: 2,
              borderColor: "white",
              backgroundColor: "#3775C5",
              overflow: "hidden",
              left: 25,
              marginBottom: 10,
            }}
            name="leaf"
            size={24}
            color="white"
          />
          <Text style={styles.option}>{"Autres"}</Text>
        </View>
      )}
    </View>
  );
};

export default Type;

const styles = StyleSheet.create({
  allText: {
    margin: 5,
  },
  label: {
    width: 50,
    height: 50,
    textAlign: "center",
    padding: 10,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "white",
    backgroundColor: "blue",
    overflow: "hidden",
  },
  option: {
    color: "white",
    width: 100,
    textAlign: "center",
  },
  element: {
    position: "absolute",
    right: 10,
    top: 170,
  },
});
