import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { WeatherDetailRowProps } from "./WeatherDetailRow.types";

const WeatherDetailRow = ({ title, value }: WeatherDetailRowProps) => {
  return (
    <View style={styles.dataRow}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  dataRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
    borderBottomColor: Colors.light,
    borderBottomWidth: 1,
  },
  title: {
    color: Colors.darker,
  },
  value: {
    color: Colors.dark,
  },
});

export default WeatherDetailRow;
