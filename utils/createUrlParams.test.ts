import createUrlParams from "./createUrlParams";

describe("createUrlParams", () => {
  test("should return a path combined with stringified object as query params", () => {
    const params = {
      test: "test",
      id: "218-fc",
    };

    const url = createUrlParams("/cities", params);

    expect(url).toBe(`/cities?test=${params.test}&id=${params.id}`);
  });
});
