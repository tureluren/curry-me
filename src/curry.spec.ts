import curry from "./curry";

describe ("Curry", () => {
  test ("Curry1", () => {
    const add = curry ((s: number) =>
      s + 0);

    expect (add (1)).toBe (1);
  });

  test ("Curry2", () => {
    const add = curry ((s: number, t: number) =>
      s + t);

    expect (add (1, 2)).toBe (3);
    expect (add (1) (2)).toBe (3);
  });

  test ("Curry3", () => {
    const add = curry ((s: number, t: number, u: number) =>
      s + t + u);

    expect (add (1, 2, 3)).toBe (6);
    expect (add (1) (2, 3)).toBe (6);
    expect (add (1, 2) (3)).toBe (6);
    expect (add (1) (2) (3)).toBe (6);
  });

  test ("Curry4", () => {
    const add = curry ((s: number, t: number, u: number, v: number) =>
      s + t + u + v);

    expect (add (1, 2, 3, 4)).toBe (10);
    expect (add (1) (2, 3, 4)).toBe (10);
    expect (add (1, 2) (3, 4)).toBe (10);
    expect (add (1, 2) (3) (4)).toBe (10);
    expect (add (1, 2, 3) (4)).toBe (10);
    expect (add (1) (2, 3) (4)).toBe (10);
    expect (add (1) (2) (3, 4)).toBe (10);
    expect (add (1) (2) (3) (4)).toBe (10);
  });
});