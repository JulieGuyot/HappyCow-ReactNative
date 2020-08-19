import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import MapView from "react-native-maps";
import * as Location from "expo-location";

export default function MapScreen() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const askPermission = async () => {
      const { status } = await Location.requestPermissionsAsync();
      if (status === "granted") {
        let location = await Location.getCurrentPositionAsync({});
        setLatitude(location.coords.latitude);
        setLongitude(location.coords.longitude);
        setIsLoading(false);
      } else {
        alert("Vous devez accepter la geolocalisation pour accéder à la page");
      }
    };
    askPermission();
    setIsLoading(false);
  }, []);

  return (
    <View>
      {isLoading === false ? (
        <MapView
          style={{ width: "100%", height: "100%" }}
          initialRegion={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.2,
            longitudeDelta: 0.2,
          }}
          showsUserLocation={true}
        ></MapView>
      ) : null}
    </View>
  );
}
