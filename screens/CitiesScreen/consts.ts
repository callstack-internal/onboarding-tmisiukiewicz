export const mockCities = {
  cnt: 2,
  list: [
    {
      coord: {
        lon: 2.3488,
        lat: 48.8534,
      },
      sys: {
        country: "FR",
        timezone: 3600,
        sunrise: 1667890099,
        sunset: 1667924425,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      main: {
        temp: 10.75,
        feels_like: 9.97,
        temp_min: 9.65,
        temp_max: 11.96,
        pressure: 1007,
        humidity: 80,
      },
      visibility: 10000,
      wind: {
        speed: 6.17,
        deg: 170,
      },
      clouds: {
        all: 0,
      },
      dt: 1667891363,
      id: 2988507,
      name: "Paris",
    },
    {
      coord: {
        lon: -3.7026,
        lat: 40.4165,
      },
      sys: {
        country: "ES",
        timezone: 3600,
        sunrise: 1667890352,
        sunset: 1667927077,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      main: {
        temp: 10.33,
        feels_like: 9.46,
        temp_min: 7.53,
        temp_max: 12.31,
        pressure: 1018,
        humidity: 78,
      },
      visibility: 10000,
      wind: {
        speed: 1.03,
        deg: 0,
      },
      clouds: {
        all: 75,
      },
      dt: 1667891362,
      id: 3117735,
      name: "Madrid",
    },
  ],
};
