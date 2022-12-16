import React from "react";
import useFetch from "use-http";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { PerformanceMeasureView } from "@shopify/react-native-performance";
import {
  CITIES_LIST,
  ENDPOINTS,
  OPENWEATHER_API_KEY,
} from "../../utils/consts";
import createUrlParams from "../../utils/createUrlParams";
import { WeatherResponse } from "../../types";
import CityList from "../../components/CityList";

const CitiesScreen = () => {
  console.log(
    createUrlParams(ENDPOINTS.group, {
      appid: OPENWEATHER_API_KEY,
      units: "metric",
      id: CITIES_LIST.join(","),
    })
  );
  const { loading, error, data } = useFetch<WeatherResponse>(
    createUrlParams(ENDPOINTS.group, {
      appid: OPENWEATHER_API_KEY,
      units: "metric",
      id: CITIES_LIST.join(","),
    }),
    {},
    []
  );

  return (
    <PerformanceMeasureView
      interactive={data !== undefined}
      screenName="CitiesScreen"
    >
      <View style={styles.container}>
        {loading && (
          <ActivityIndicator
            accessibilityState={{
              busy: true,
            }}
          />
        )}
        {error && <Text style={styles.errorMsg}>Unable to load list</Text>}
        {data && <CityList list={data.list} />}
      </View>
    </PerformanceMeasureView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  errorMsg: {
    color: Colors.error,
    fontWeight: "bold",
  },
});

export default CitiesScreen;
