import curry from "./curry";

const add = curry ((x: number, y: number, z: number) => x + y + z);

add (1) (2) (3);