import { expect } from "chai";
import { myMap } from "../src/index.js";

describe("myMap", () => {
  it("doubles every number in a collection", () => {
    const nums = [1, 2, 3, 4, 5];

    const doubledNums = myMap(nums, function (n) {
      return n * 2;
    });

    expect(doubledNums).to.deep.eq([2, 4, 6, 8, 10]);
  });

  it("uppercases every letter in a collection", () => {
    const letters = ["h", "e", "l", "l", "o"];

    const capitalLetters = myMap(letters, function (c) {
      return c.toUpperCase();
    });

    expect(capitalLetters).to.deep.eq(["H", "E", "L", "L", "O"]);
  });

  it("negates every boolean in a collection", () => {
    const bools = [true, false, false, true];

    const negations = myMap(bools, function negate(boolean) {
      return !boolean;
    });

    expect(negations).to.deep.eq([false, true, true, false]);
  });

  it("lowercases every letter in a collection", () => {
    const letters = ["H", "E", "L", "L", "O"];

    const capitalLetters = myMap(letters, function (c) {
      return c.toLowerCase();
    });

    expect(capitalLetters).to.deep.eq(["h", "e", "l", "l", "o"]);
  });
});
