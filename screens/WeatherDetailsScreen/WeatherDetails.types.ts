import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { CityListRowProps } from "../../components/CityListRow/CityListRow.types";
import { MainStackParamList } from "../../navigation/types";

export interface WeatherDetailsScreenParams extends CityListRowProps {
  humidity: number;
  pressure: number;
  windSpeed: number;
  cloudCover: number;
}

export type WeatherDetailsScreenProps = NativeStackScreenProps<
  MainStackParamList,
  "WeatherDetails"
>;
