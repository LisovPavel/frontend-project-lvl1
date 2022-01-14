import readlineSync from 'readline-sync';

export const ask = (question) => {
  console.log(`Question: ${question}`);
};

export const listenAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

export const successMessage = () => {
  console.log('Correct!');
};

export const failMessage = (userAnswer, rightAnswer) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
};
