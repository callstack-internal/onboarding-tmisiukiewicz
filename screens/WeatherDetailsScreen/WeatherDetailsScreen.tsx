import { View } from "react-native";
import React from "react";
import { PerformanceMeasureView } from "@shopify/react-native-performance";
import CityListRow from "../../components/CityListRow";
import WeahterDetailRow from "../../components/WeahterDetailRow";
import { WeatherDetailsScreenProps } from "./WeatherDetails.types";

const WeatherDetailsScreen = ({ route }: WeatherDetailsScreenProps) => {
  const { humidity, cloudCover, pressure, windSpeed, ...rest } = route.params;

  return (
    <PerformanceMeasureView interactive screenName="WeatherDetailsScreen">
      <View>
        <CityListRow {...rest} />
        <WeahterDetailRow title="Humidity" value={`${humidity}%`} />
        <WeahterDetailRow title="Pressure" value={`${pressure} hPa`} />
        <WeahterDetailRow title="Wind speed" value={`${windSpeed} mph`} />
        <WeahterDetailRow title="Cloud cover" value={`${cloudCover}%`} />
      </View>
    </PerformanceMeasureView>
  );
};

export default WeatherDetailsScreen;
