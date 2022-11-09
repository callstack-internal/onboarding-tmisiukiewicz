/* eslint-disable no-undef */
describe("Example", () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("should open Cities screen by default", async () => {
    await expect(element(by.text("Cities"))).toBeVisible();
  });

  it("should display list of the cities after fetching it from the API", async () => {
    await expect(element(by.label("List of cities"))).toExist();
  });
});
