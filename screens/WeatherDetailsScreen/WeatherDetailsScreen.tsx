import { View } from "react-native";
import React from "react";
import CityListRow from "../../components/CityListRow";
import WeahterDetailRow from "../../components/WeahterDetailRow";
import { WeatherDetailsScreenProps } from "./WeatherDetails.types";

const WeatherDetailsScreen = ({ route }: WeatherDetailsScreenProps) => {
  const { humidity, cloudCover, pressure, windSpeed, ...rest } = route.params;
  return (
    <View>
      <CityListRow {...rest} />
      <WeahterDetailRow title="Humidity" value={`${humidity}%`} />
      <WeahterDetailRow title="Pressure" value={`${pressure} hPa`} />
      <WeahterDetailRow title="Wind speed" value={`${windSpeed} mph`} />
      <WeahterDetailRow title="Cloud cover" value={`${cloudCover}%`} />
    </View>
  );
};

export default WeatherDetailsScreen;
