import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Text style={styles.text}>This is home screen</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    color: "blue",
  },
});
