import React from "react";
import { measurePerformance } from "reassure";
import WeatherDetailRow from "./WeatherDetailRow";

describe("WeatherDetailsRow performance", () => {
  test("should render", async () => {
    await measurePerformance(<WeatherDetailRow title="Title" value="Value" />);
  });
});
