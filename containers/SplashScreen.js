import React from "react";
import { Image } from "react-native";

const SplashScreen = () => {
  return (
    <Image
      source={require("../assets/happycow-firstPage.jpg")}
      resizeMode="contain"
    />
  );
};
export default SplashScreen;
