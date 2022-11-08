import React from "react";
import { render } from "@testing-library/react-native";
import useFetch from "use-http";
import CitiesScreen from "./CitiesScreen";
import { mockCities } from "./consts";

jest.mock("use-http");

describe("CitiesScreen", () => {
  test("should display loader when the screen is initialized", () => {
    (useFetch as jest.Mock).mockReturnValueOnce({
      loading: true,
    });
    const { getByA11yState } = render(<CitiesScreen />);

    expect(getByA11yState({ busy: true })).toBeTruthy();
  });

  test("should display list of cities after loading data from the API", async () => {
    (useFetch as jest.Mock).mockReturnValueOnce({
      loading: false,
      data: mockCities,
    });

    const { getAllByLabelText } = render(<CitiesScreen />);

    expect(getAllByLabelText("City").length).toBe(2);
  });

  test("should display error message when list is not loaded", () => {
    (useFetch as jest.Mock).mockReturnValueOnce({
      error: true,
    });

    const { getByText } = render(<CitiesScreen />);

    expect(getByText("Unable to load list")).toBeTruthy();
  });
});
