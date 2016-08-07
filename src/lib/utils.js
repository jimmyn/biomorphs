import base64url from 'base64-url';

export const getRandomInt = (min, max) => (
  Math.floor(Math.random() * (max - min + 1)) + min
);
export const isEven = (n) => n % 2 === 0;
export const isOdd = (n) => n % 2 !== 0;

export const encode = (obj) => (
  base64url.encode(JSON.stringify(obj))
);

export const decode = (string) => (
  JSON.parse(base64url.decode(string))
);
