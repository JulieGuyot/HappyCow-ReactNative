import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, AsyncStorage } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import restaurants from "./assets/restaurants.json";

import FavoritesScreen from "./containers/FavoritesScreen";
import MapScreen from "./containers/MapScreen";
import RestaurantScreen from "./containers/RestaurantScreen";
import RestaurantsScreen from "./containers/RestaurantsScreen";
import SplashScreen from "./containers/SplashScreen";
import Login from "./containers/Login";
import SignUp from "./containers/SignUp";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const [favorite, setFavorite] = useState([]);
  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <NavigationContainer>
      {isLoading ? (
        <Stack.Screen name="splashScreen">
          {() => <SplashScreen />}
        </Stack.Screen>
      ) : (
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: "#6D3FAD",
            inactiveTintColor: "gray",
          }}
        >
          <Tab.Screen
            name="Explorer"
            options={{
              tabBarLabel: "Explorer",
              tabBarIcon: ({ color, size }) => (
                <AntDesign name="search1" size={24} color="gray" />
              ),
            }}
          >
            {() => (
              <Stack.Navigator>
                <Stack.Screen
                  name="restaurantsScreen"
                  options={{ header: () => null, animationEnabled: false }}
                >
                  {() => (
                    <RestaurantsScreen
                      data={restaurants}
                      favorite={favorite}
                      setFavorite={setFavorite}
                    />
                  )}
                </Stack.Screen>

                <Stack.Screen name="restaurant">
                  {() => <RestaurantScreen data={restaurants} />}
                </Stack.Screen>
              </Stack.Navigator>
            )}
          </Tab.Screen>
          <Tab.Screen
            name="Favoris"
            options={{
              tabBarLabel: "Favoris",
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="favorite" size={24} color="gray" />
              ),
            }}
          >
            {() => <FavoritesScreen />}
          </Tab.Screen>
          <Tab.Screen
            name="Map"
            options={{
              tabBarLabel: "Map",
              tabBarIcon: ({ color, size }) => (
                <FontAwesome name="map-marker" size={24} color="grey" />
              ),
            }}
          >
            {() => (
              <Stack.Navigator>
                <Stack.Screen
                  name="Map"
                  options={{
                    title: "Map",
                    tabBarLabel: "Map",
                  }}
                >
                  {() => <MapScreen data={restaurants} />}
                </Stack.Screen>
              </Stack.Navigator>
            )}
          </Tab.Screen>
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
