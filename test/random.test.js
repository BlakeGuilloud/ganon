const { random } = require("../lib");

describe("random", () => {
  test("should produce values greater than or equal to 0", () => {
    for (let i = 0; i < 10000; ++i) {
      expect(random()).toBeGreaterThanOrEqual(0);
    }
  });

  test("should produce values less than 1", () => {
    for (let i = 0; i < 10000; ++i) {
      expect(random()).toBeLessThan(1);
    }
  });

  test("should be uniformely distributed (determined by a chi-squared test with alpha=0.01)", () => {
    const numberOfObservations = 10000;
    const numberOfBins = 10;
    const criticalValue = 21.666; // https://www.medcalc.org/manual/chi-square-table.php

    // arrange
    const observations = [];
    for (let bin = 0; bin < numberOfBins; ++bin) {
      observations.push(0);
    }

    // act
    for (let i = 0; i < numberOfObservations; ++i) {
      const bin = Math.floor(random() * numberOfBins);
      ++observations[bin];
    }

    // assert
    const expected = numberOfObservations / numberOfBins;
    const chiSquared = observations.reduce((acc, observed) => {
      const diff = observed - expected;
      return acc + (diff * diff / expected);
    }, 0);
    expect(chiSquared).toBeLessThanOrEqual(criticalValue);
  });
});
