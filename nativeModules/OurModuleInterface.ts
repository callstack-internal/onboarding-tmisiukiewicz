import { NativeModules } from "react-native";

class OurModuleInterface {
  static showFancyNotification(title: string, body: string) {
    const module = NativeModules.MyNotification;

    module.showNotification(title, body);
  }
}

export default OurModuleInterface;
