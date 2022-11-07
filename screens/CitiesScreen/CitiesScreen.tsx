import React from "react";
import { View, Text, FlatList, StyleSheet, ListRenderItem } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { CITIES_MOCK_DATA } from "./consts";
import { City } from "./types";

const CitiesScreen = () => {
  const renderItem: ListRenderItem<City> = ({ item }) => (
    <View style={styles.row}>
      <Text>{item.name}</Text>
    </View>
  );

  return (
    <View>
      <FlatList
        data={CITIES_MOCK_DATA}
        {...{ renderItem }}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  separator: {
    height: 1,
    backgroundColor: Colors.dark,
  },
  list: {
    height: "100%",
  },
});

export default CitiesScreen;
