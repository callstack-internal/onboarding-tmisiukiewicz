import React from "react";
import { measurePerformance } from "reassure";
import CityListRow from "./CityListRow";

const mockProps = {
  name: "Madrid",
  description: "Clear",
  icon: "01d",
  temperature: 26,
};

describe("CityListRow performance", () => {
  test("should render component", async () => {
    await measurePerformance(<CityListRow {...mockProps} />);
  });
});
