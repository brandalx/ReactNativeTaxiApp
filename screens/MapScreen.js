import { View } from "react-native";
import React from "react";
import tw from "twrnc";
import Map from "../components/Map";
import { Icon } from "react-native-elements";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigateCard from "../components/NavigateCard";
import RideOptionsCard from "../components/RideOptionsCard";

const MapScreen = ({ navigation }) => {
  const Stack = createNativeStackNavigator();

  return (
    <View style={{ flex: 1 }}>
      <View style={tw`h-1/2`}>
        <Map />

        <View style={{ position: "absolute", top: 50, left: 10 }}>
          <Icon
            onPress={() => navigation.goBack()}
            style={tw`p-1 bg-black rounded-full w-10`}
            name="arrowleft"
            color="white"
            type="antdesign"
          />
        </View>
      </View>

      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;
