import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import React from "react";
import tw from "twrnc";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch } from "react-redux";
import { setDestination } from "../slices/navSlice";
import { useNavigation } from "@react-navigation/native";
import NavFavorites from "./NavFavorites";
import { Icon } from "react-native-elements";
const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={tw`bg-white flex-1`}>
        <View>
          <Text style={tw`text-center py-5 text-xl`}>Good Morning, Name</Text>
          <View style={tw`border-t border-gray-200 flex-shrink`}>
            <View>
              <GooglePlacesAutocomplete
                styles={inputBoxStyles}
                placeholder="Where to?"
                enablePoweredByContainer={false}
                nearbyPlacesAPI="GooglePlacesSearch"
                debounce={400}
                onPress={(data, details = null) => {
                  dispatch(
                    setDestination({
                      location: details.geometry.location,
                      description: data.description,
                    })
                  );
                  navigation.navigate("RideOptionsCard");
                }}
                fetchDetails={true}
                query={{
                  key: GOOGLE_MAPS_APIKEY,
                  language: "en",
                }}
              />
            </View>
          </View>
          <NavFavorites />
        </View>
        <View
          style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("RideOptionsCard")}
            style={tw`flex flex-row bg-black w-24 px-4 py-3 rounded-full justify-between`}
          >
            <Icon name="car" type="font-awesome" color="white" size={16} />

            <Text style={tw`text-white text-center`}>Rides</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={tw`flex flex-row  w-24 px-4 py-3 rounded-full justify-between`}
          >
            <Icon
              name="fast-food-outline"
              type="ionicon"
              color="black"
              size={16}
            />

            <Text style={tw` text-center`}>Eats</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default NavigateCard;

const inputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 15,

    flex: 0,
  },
  textInput: {
    backgroundColor: "#DDDDDF",
    borderRadius: 100,
    fontSize: 14,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});
