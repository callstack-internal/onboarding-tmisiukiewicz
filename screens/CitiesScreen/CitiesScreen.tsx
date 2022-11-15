import React from "react";
import useFetch from "use-http";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ListRenderItem,
  ActivityIndicator,
  Pressable,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import {
  CITIES_LIST,
  ENDPOINTS,
  OPENWEATHER_API_KEY,
} from "../../utils/consts";
import createUrlParams from "../../utils/createUrlParams";
import { City, WeatherResponse } from "../../types";
import CityListRow from "../../components/CityListRow";
import { CitiesScreenProps } from "./CitiesScreen.types";

const CitiesScreen = ({ navigation }: CitiesScreenProps) => {
  const { loading, error, data } = useFetch<WeatherResponse>(
    createUrlParams(ENDPOINTS.group, {
      appid: OPENWEATHER_API_KEY,
      units: "metric",
      id: CITIES_LIST.join(","),
    }),
    {},
    []
  );

  const renderItem: ListRenderItem<City> = ({
    item: {
      name,
      main: { temp: temperature, humidity, pressure },
      wind: { speed: windSpeed },
      clouds: { all: cloudCover },
      weather,
    },
  }) => {
    const [weatherData] = weather;
    const { icon, main: description } = weatherData;
    const commonProps = { name, description, icon, temperature };
    const screenParams = {
      ...commonProps,
      ...{ humidity, pressure, windSpeed, cloudCover },
    };

    return (
      <Pressable
        accessibilityRole="button"
        onPress={() => navigation.navigate("WeatherDetails", screenParams)}
      >
        <CityListRow {...commonProps} />
      </Pressable>
    );
  };

  return (
    <View>
      {loading && (
        <ActivityIndicator
          accessibilityState={{
            busy: true,
          }}
        />
      )}
      {error && <Text style={styles.errorMsg}>Unable to load list</Text>}
      {data && (
        <FlatList
          accessibilityLabel="List of cities"
          data={data.list}
          {...{ renderItem }}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.list}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    height: "100%",
  },
  errorMsg: {
    color: Colors.error,
    fontWeight: "bold",
  },
});

export default CitiesScreen;
