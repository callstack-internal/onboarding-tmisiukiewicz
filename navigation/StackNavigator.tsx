import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CitiesScreen from "../screens/CitiesScreen";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cities" component={CitiesScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
