import transformTemperature from "./transformTemperature";

describe("transformTemperature", () => {
  test("it should convert temperature to string with celsius degrees annotation", () => {
    const temperature = transformTemperature(20.1);

    expect(temperature).toBe("20.1 °C");
  });
});
