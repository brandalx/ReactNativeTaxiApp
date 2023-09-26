import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import tw from "twrnc";

import React from "react";

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{ width: 100, height: 50, resizeMode: "contain" }}
          source={{
            uri: "https://www.freepnglogos.com/uploads/tesla-logo-png-13.png",
          }}
        />
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
