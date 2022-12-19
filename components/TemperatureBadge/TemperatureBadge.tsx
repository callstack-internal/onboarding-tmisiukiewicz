import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import transformTemperature from "../../utils/transformTemperature";

const TemperatureBadge = ({ temperature }: { temperature: number }) => {
  return (
    <View style={styles.temperatureContainer}>
      <Text style={styles.temperature} accessibilityLabel="temperature">
        {transformTemperature(temperature)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default TemperatureBadge;
