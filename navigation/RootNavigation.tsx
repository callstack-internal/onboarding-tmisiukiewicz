import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./StackNavigator";

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default RootNavigation;
