import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import tw from "twrnc";
const data = [
  {
    id: "123",
    icon: "home",
    location: "Home",
    destination: "Code Street, London, UK",
  },

  {
    id: "456",
    icon: "briefcase",
    location: "Work",
    destination: "London Eye, UK",
  },
];
const NavFavorites = () => {
  return (
    <FlatList
      ItemSeparatorComponent={() => (
        <View style={[tw`bg-gray-200`, { height: 0.5 }]} />
      )}
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item: { location, destination, icon } }) => (
        <TouchableOpacity style={tw`flex-row items-center p-5`}>
          <Icon
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            name={icon}
            color="white"
            type="ionicon"
            size={16}
          />
          <View>
            <Text style={tw`font-semibold`}>{location}</Text>
            <Text style={tw` text-gray-500`}>{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    ></FlatList>
  );
};

export default NavFavorites;

const styles = StyleSheet.create({});
