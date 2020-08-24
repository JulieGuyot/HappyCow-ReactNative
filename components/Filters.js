import React from "react";
import {
  View,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import Icon from "./Icon";
import { AntDesign } from "@expo/vector-icons";

const Filters = ({ setFilters, setCategory }) => {
  return (
    <View>
      <View>
        <TouchableOpacity
          onPress={() => {
            setCategory(null);
            setFilters(false);
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <AntDesign name="back" size={20} color="black" />
            <Text
              style={{
                marginBottom: 20,
                fontSize: 16,
                paddingTop: 2,
                paddingLeft: 5,
              }}
            >
              {" "}
              Revenir à la liste des restaurants
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setCategory(10);
            setFilters(false);
          }}
        >
          <View style={styles.filter}>
            <Icon category={10} />
            <Text style={styles.filterText}>{"Vegan"}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setCategory(0);
            setFilters(false);
          }}
        >
          <View style={styles.filter}>
            <Icon category={0} />
            <Text style={styles.filterText}>{"Options végétariennes"}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setCategory(1);
            setFilters(false);
          }}
        >
          <View style={styles.filter}>
            <Icon category={1} />
            <Text style={styles.filterText}>{"Magasin bio / diététique"}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setCategory(2);
            setFilters(false);
          }}
        >
          <View style={styles.filter}>
            <Icon category={2} />
            <Text style={styles.filterText}>{"Magasin vegan"}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setCategory(3);
            setFilters(false);
          }}
        >
          <View style={styles.filter}>
            <Icon category={3} />
            <Text style={styles.filterText}> {"Boulangerie"}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setCategory(4);
            setFilters(false);
          }}
        >
          <View style={styles.filter}>
            <Icon category={4} />
            <Text style={styles.filterText}> {"Hôtel"}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setCategory(5);
            setFilters(false);
          }}
        >
          <View style={styles.filter}>
            <Icon category={5} />
            <Text style={styles.filterText}> {"Livraison"}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setCategory(6);
            setFilters(false);
          }}
        >
          <View style={styles.filter}>
            <Icon category={6} />
            <Text style={styles.filterText}>{"Restauration"}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setCategory(7);
            setFilters(false);
          }}
        >
          <View style={styles.filter}>
            <Icon category={7} />
            <Text style={styles.filterText}> {"Organisation"}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setCategory(12);
            setFilters(false);
          }}
        >
          <View style={styles.filter}>
            <Icon category={12} />
            <Text style={styles.filterText}> {"Glaces"}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setCategory(13);
            setFilters(false);
          }}
        >
          <View style={styles.filter}>
            <Icon category={13} />
            <Text style={styles.filterText}>{"Bar à jus"}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setCategory(14);
            setFilters(false);
          }}
        >
          <View style={styles.filter}>
            <Icon category={14 || 99} />
            <Text style={styles.filterText}> {"Autres"}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Filters;

const styles = StyleSheet.create({
  filter: {
    flexDirection: "row",
    height: 30,
  },
  filterText: {
    marginLeft: 7,
    fontSize: 16,
  },
});
