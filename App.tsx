import React, { useCallback, useEffect } from "react";
import {
  NativeModules,
  SafeAreaView,
  StyleSheet,
  useColorScheme,
  View,
} from "react-native";
import { ListsProfiler } from "@shopify/react-native-performance-lists-profiler";
import { ScriptManager, Script } from "@callstack/repack/client";
import { CachePolicies, Provider } from "use-http";
import { Colors } from "react-native/Libraries/NewAppScreen";
import {
  PerformanceProfiler,
  RenderPassReport,
} from "@shopify/react-native-performance";
import RootNavigation from "./navigation/RootNavigation";
import { OPENWEATHER_API_URL } from "./utils/consts";
import OurModuleInterface from "./nativeModules/OurModuleInterface";

ScriptManager.shared.addResolver(async (scriptId) => {
  // In dev mode, resolve script location to dev server.
  if (__DEV__) {
    return {
      url: Script.getDevServerURL(scriptId),
      cache: false,
    };
  }
});

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

  const onInteractiveCallback = useCallback((TTI: number, listName: string) => {
    console.log(`${listName}'s TTI: ${TTI}`);
  }, []);

  const onReportPrepared = useCallback((report: RenderPassReport) => {
    console.log(report);
  }, []);

  return (
    <PerformanceProfiler onReportPrepared={onReportPrepared}>
      <ListsProfiler onInteractive={onInteractiveCallback}>
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
      </ListsProfiler>
    </PerformanceProfiler>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
