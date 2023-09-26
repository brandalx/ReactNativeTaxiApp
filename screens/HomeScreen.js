import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import tw from "twrnc";

import React from "react";
import NavOptions from "../components/NavOptions";
import logoimg from "../assets/logo.png";
const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{
            width: 50,
            height: 50,
            marginLeft: 11,
            resizeMode: "contain",
          }}
          source={logoimg}
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    color: "blue",
  },
});
