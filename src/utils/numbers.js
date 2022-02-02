// eslint-disable-next-line import/prefer-default-export
export const getRandomNumber = (max = 1000) => Math.floor(Math.random() * max);

export const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};

export const checkEven = (number) => !(number % 2);

export const checkPrime = (number) => {
  let i = 2;
  while (i < number / 2) {
    if (number % i === 0) {
      return false;
    }
    i += 1;
  }
  return true;
};
