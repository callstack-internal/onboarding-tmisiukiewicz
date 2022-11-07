import React from "react";
import { SafeAreaView, StyleSheet, useColorScheme, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import RootNavigation from "./navigation/RootNavigation";

const App = () => {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.default,
  };

  return (
    <SafeAreaView style={{ ...backgroundStyle, ...styles.container }}>
      <View style={styles.container}>
        <RootNavigation />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
