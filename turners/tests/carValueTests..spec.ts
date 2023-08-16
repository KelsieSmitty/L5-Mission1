import { calculateCarValue } from "../src/services/carValueCalculator";

describe("Car value tests", () => {
  it("when model is Civic and year is 2014 returns 6614", () => {
    // Arrange

    const expected = { car_value: 6614 };
    const model = "Civic";
    const year = 2014;

    // Act

    const actual = calculateCarValue(model, year);

    // Assert

    expect(actual).toEqual(expected);
  });
});
