import { Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { FlashList, ListRenderItem } from "@shopify/flash-list";
import { FlashListPerformanceView } from "@shopify/react-native-performance-lists-profiler";
import { useStartProfiler } from "@shopify/react-native-performance";
import { City } from "../../types";
import CityListRow from "../CityListRow";

const CityList = ({ list }: { list: City[] }) => {
  const navigation = useNavigation();
  const startNavigationTTITimer = useStartProfiler();
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
        onPress={(event) => {
          startNavigationTTITimer({
            source: "CitiesScreen",
            uiEvent: event,
          });
          navigation.navigate("WeatherDetails", screenParams);
        }}
      >
        <CityListRow {...commonProps} />
      </Pressable>
    );
  };

  return (
    <FlashListPerformanceView listName="CityList">
      <FlashList
        accessibilityLabel="List of cities"
        {...{ renderItem }}
        data={list}
        keyExtractor={(item) => item.id.toString()}
        estimatedItemSize={83}
      />
    </FlashListPerformanceView>
  );
};

export default CityList;
