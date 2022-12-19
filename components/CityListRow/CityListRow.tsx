import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { OPENWEATHER_ICON_URL } from "../../utils/consts";
import { CityListRowProps } from "./CityListRow.types";

const CityListRow = ({
  description,
  icon,
  name,
  temperature,
  hideTemperature,
}: CityListRowProps) => {
  const uri = `${OPENWEATHER_ICON_URL}/${icon}.png`;
  const TemperatureBadge = React.lazy(() => import("../TemperatureBadge"));

  return (
    <View style={styles.container} accessibilityLabel="City">
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
      {!hideTemperature && <TemperatureBadge {...{ temperature }} />}
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
});

export default CityListRow;
