import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { WeatherDetailsScreenParams } from "../screens/WeatherDetailsScreen/WeatherDetails.types";

export type MainStackParamList = {
  Cities: undefined;
  WeatherDetails: WeatherDetailsScreenParams;
};

export type MainNavigationPropType =
  NativeStackNavigationProp<MainStackParamList>;
