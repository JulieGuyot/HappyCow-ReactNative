import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import MapView from "react-native-maps";
import * as Location from "expo-location";
import Marker from "../components/Marker";

export default function MapScreen({ data }) {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const CustomMarker = (index) => {
    return (
      <View>
        <Marker category={data[index].category} />
      </View>
    );
  };

  useEffect(() => {
    const askPermission = async () => {
      const { status } = await Location.requestPermissionsAsync();
      if (status === "granted") {
        let location = await Location.getCurrentPositionAsync({});
        setLongitude(location.coords.longitude);
        setLatitude(location.coords.latitude);
        setIsLoading(false);
      } else {
        alert("Vous devez accepter la geolocalisation pour accéder à la page");
      }
    };
    askPermission();
  }, []);

  return (
    <View>
      {isLoading === false ? (
        <MapView
          style={{ width: "100%", height: "100%" }}
          initialRegion={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
          showsUserLocation={true}
        >
          {data.map((element, index) => {
            return (
              <MapView.Marker
                key={element.placeId}
                coordinate={{
                  latitude: element.location.lat,
                  longitude: element.location.lng,
                }}
                title={element.name}
              >
                {CustomMarker(index)}
              </MapView.Marker>
            );
          })}
        </MapView>
      ) : null}
    </View>
  );
}
