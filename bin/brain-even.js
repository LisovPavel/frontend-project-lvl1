#!/usr/bin/env node

import readlineSync from 'readline-sync';

const checkEven = (nubmer) => !(nubmer % 2);

const getRandomNumber = () => Math.floor(Math.random() * 1000);

const checkAnswer = (answer, isEven) => {
  switch (answer) {
    case 'yes':
      return isEven === true;
    case 'no':
      return isEven === false;
    default:
      return false;
  }
};

const startRound = () => {
  const number = getRandomNumber();
  const isEven = checkEven(number);
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  const isCorrect = checkAnswer(answer, isEven);
  if (isCorrect) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEven ? 'yes' : 'no'}'.`);
  return false;
};

// eslint-disable-next-line import/prefer-default-export
export const playBrainEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const CORRECT_ANSWERS_FOR_SUCCESS = 3;
  let rightAnswers = 0;
  while (rightAnswers < CORRECT_ANSWERS_FOR_SUCCESS) {
    const isCorrectAnswer = startRound();
    if (isCorrectAnswer) {
      rightAnswers += 1;
    } else {
      return false;
    }
  }
  return true;
};
