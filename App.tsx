import React from "react";
import { SafeAreaView, StyleSheet, useColorScheme, View } from "react-native";
import { Provider } from "use-http";
import { Colors } from "react-native/Libraries/NewAppScreen";
import RootNavigation from "./navigation/RootNavigation";
import { OPENWEATHER_API_URL } from "./utils/consts";

const App = () => {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.default,
  };

  return (
    <Provider url={OPENWEATHER_API_URL}>
      <SafeAreaView style={{ ...backgroundStyle, ...styles.container }}>
        <View style={styles.container}>
          <RootNavigation />
        </View>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
