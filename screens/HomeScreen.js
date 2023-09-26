import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import tw from "twrnc";

import React from "react";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Text style={(tw`text-red-500 p-10,`, { color: "purple" })}>
        This is home screen
      </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    color: "blue",
  },
});
