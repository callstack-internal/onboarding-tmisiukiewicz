import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { OPENWEATHER_ICON_URL } from "../../utils/consts";
import transformTemperature from "../../utils/transformTemperature";
import { CityListRowProps } from "./types";

const CityListRow = ({
  description,
  icon,
  name,
  temperature,
}: CityListRowProps) => {
  const uri = `${OPENWEATHER_ICON_URL}/${icon}.png`;

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={{
            uri,
          }}
          style={styles.icon}
          accessibilityIgnoresInvertColors
        />
      </View>
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.temperatureContainer}>
        <Text style={styles.temperature}>
          {transformTemperature(temperature)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.light,
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    fontSize: 16,
    fontWeight: "500",
  },
  description: {
    color: Colors.dark,
  },
  icon: {
    width: 50,
    height: 50,
  },
  temperatureContainer: {
    marginLeft: "auto",
    backgroundColor: "#74b9ff",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  temperature: {
    color: Colors.white,
  },
});

export default CityListRow;
