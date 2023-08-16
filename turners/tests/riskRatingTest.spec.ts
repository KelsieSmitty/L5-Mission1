import { convertHistory } from "../src/services/riskRatingCalculator";

describe("Risk rating tests", () => {
  it("when claim history string contains 3 keywords from the keyword list returns risk rating of 3", () => {
    // Arrange

    const expected = { risk_rating: 3 };
    const claimHistory =
      "My only claim was a crash into my house's garage door that left a scratch on my car.  There are no other crashes.";

    // Act

    const actual = convertHistory(claimHistory);

    // Assert

    expect(actual).toEqual(expected);
  });
});
