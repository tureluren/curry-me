import curry from "./curry";

describe ("Curry", () => {
  test ("Curry1", () => {
    const add = curry (s => s);

    expect (add (1)).toBe (1);
  });
});