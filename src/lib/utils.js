export const getRandomInt = (min, max) => (
  Math.floor(Math.random() * (max - min + 1)) + min
);
export const isEven = (n) => n % 2 === 0;
export const isOdd = (n) => n % 2 !== 0;
