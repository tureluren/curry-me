# Curry Me
A typed curry function with great IntelliSense.
> Please note that you can curry functions with a maximum arity of 8.

<img height="200" alt="Great IntelliSense" src="https://raw.githubusercontent.com/tureluren/curry-me/main/curry.gif">

## Installation
```bash
yarn install curry-me
# or
npm install curry-me
```

## Getting started
```ts
import curry from "curry-me";

const add = curry ((x: number, y: number, z: number) => x + y + z);

add (1) (2) (3); // 6
add (1, 2) (3); // 6
add (1, 2, 3); // 6
```