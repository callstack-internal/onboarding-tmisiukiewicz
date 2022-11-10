import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CitiesScreen from "../screens/CitiesScreen";
import WeatherDetailsScreen from "../screens/WeatherDetailsScreen";
import { MainStackParamList } from "./types";

const Stack = createNativeStackNavigator<MainStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cities" component={CitiesScreen} />
      <Stack.Screen name="WeatherDetails" component={WeatherDetailsScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
