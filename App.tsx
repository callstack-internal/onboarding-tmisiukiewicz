import React, { useEffect } from "react";
import {
  NativeModules,
  SafeAreaView,
  StyleSheet,
  useColorScheme,
  View,
} from "react-native";
import { CachePolicies, Provider } from "use-http";
import { Colors } from "react-native/Libraries/NewAppScreen";
import RootNavigation from "./navigation/RootNavigation";
import { OPENWEATHER_API_URL } from "./utils/consts";
import OurModuleInterface from "./nativeModules/OurModuleInterface";

const App = () => {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.default,
  };

  const notificationModule = NativeModules.MyNotification;
  const { notificationDelay } = notificationModule.getConstants();
  console.log("Delay in showing notifications is:", notificationDelay);

  useEffect(() => {
    OurModuleInterface.showFancyNotification(
      "Hello!",
      "This is a test notification!"
    );
  }, []);

  return (
    <Provider
      url={OPENWEATHER_API_URL}
      options={{ cachePolicy: CachePolicies.NO_CACHE }}
    >
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
