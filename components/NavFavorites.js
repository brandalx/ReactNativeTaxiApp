import { StyleSheet, Text, View } from "react-native";
import React from "react";
const data = [
  {
    id: "123",
    icon: "home",
    location: "Home",
    destination: "Code Street, London, UK",
  },

  {
    id: "456",
    icon: "breifcase",
    location: "Work",
    destination: "London Eye, UK",
  },
];
const NavFavorites = () => {
  return (
    <View>
      <Text>NavFavorites</Text>
    </View>
  );
};

export default NavFavorites;

const styles = StyleSheet.create({});
