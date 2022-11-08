export interface Coords {
  lon: number;
  lat: number;
}

export interface Sys {
  country: string;
  timezone: number;
  sunrise: number;
  sunset: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

export interface Wind {
  speed: number;
  deg: number;
}

export interface Cloud {
  all: number;
}

export interface City {
  coord: Coords;
  sys: Sys;
  weather: Weather[];
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Cloud;
  dt: number;
  id: number;
  name: string;
}

export interface WeatherResponse {
  cnt: number;
  list: City[];
}
