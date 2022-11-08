import React from "react";
import { render } from "@testing-library/react-native";
import CityListRow from "./CityListRow";

describe("CityListRow", () => {
  const mockProps = {
    name: "Madrid",
    description: "Clear",
    icon: "01d",
    temperature: 26,
  };

  test("should render component correctly", () => {
    const { getByText } = render(<CityListRow {...mockProps} />);

    expect(getByText("Madrid")).toBeTruthy();
  });

  test("should display temperature in celsius degrees", () => {
    const { getByText } = render(<CityListRow {...mockProps} />);

    expect(getByText("26 °C")).toBeTruthy();
  });
});
