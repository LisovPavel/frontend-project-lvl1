import { getRandomNumber } from './numbers.js';

const PROGRESSION_NUMBERS_DEFAULT = 5;

function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

export const sumProgression = (numbers = PROGRESSION_NUMBERS_DEFAULT) => {
  const increment = getRandomNumber(20);
  const firstNumber = getRandomNumber(40);
  const progression = [];
  for (let i = 0; i < numbers; i += 1) {
    progression.push(firstNumber + i * increment);
  }
  return progression;
};

export const mulProgression = (numbers = PROGRESSION_NUMBERS_DEFAULT) => {
  const increment = getRandomNumber(10);
  const firstNumber = getRandomNumber(40);
  const progression = [];
  for (let i = 0; i < numbers; i += 1) {
    if (!i) {
      return progression.push(firstNumber);
    }
    progression.push(firstNumber * i * increment);
  }
  return progression;
};

export const fibSumProgression = (numbers = PROGRESSION_NUMBERS_DEFAULT) => {
  const firstFib = getRandomNumber(10);
  const firstNumber = getRandomNumber(40);
  const progression = [];
  for (let i = 0; i < numbers; i += 1) {
    const fibNumber = fib(firstFib + i + 1);
    progression.push(firstNumber * fibNumber);
  }
  return progression;
};
