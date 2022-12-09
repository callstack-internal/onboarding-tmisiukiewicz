import { FlatList, ListRenderItem, Pressable, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { City } from "../../types";
import CityListRow from "../CityListRow";

const CityList = ({ list }: { list: City[] }) => {
  const navigation = useNavigation();
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
    <FlatList
      accessibilityLabel="List of cities"
      {...{ renderItem }}
      data={list}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    height: "100%",
  },
});

export default CityList;
