import { convertToQuote } from "../src/services/quoteCalculator";

describe("Quote Result tests", () => {
  it("when car value is 6614 and risk rating is 3, returns quote of monthly premium: 16.5, yearly_premium: 198.4", () => {
    // Arrange

    const expected = { monthly_premium: 16.5, yearly_premium: 198.4 };
    const carValue = 6614;
    const riskRating = 3;

    // Act

    const actual = convertToQuote(carValue, riskRating);

    // Assert

    expect(actual).toEqual(expected);
  });
});
