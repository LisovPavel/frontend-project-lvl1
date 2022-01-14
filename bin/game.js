import {ask, failMessage, listenAnswer, successMessage} from "../src/utils/questions.js";

export class Game {
  constructor(getQuestion, getAnswer) {
    this.getQuestion = getQuestion;
    this.getAnswer = getAnswer;
  }

  startRound = () => {
    const question = this.getQuestion();
    const answer = this.getAnswer();
    ask(question);
    const userAnswer = listenAnswer();
    if (userAnswer == answer) {
      successMessage();
      return true;
    } else {
      failMessage(userAnswer, answer);
      return false;
    }
  }

  startGame = rounds => {
    let roundsCounter = 0;
    while (roundsCounter < rounds) {
      const isSuccess = this.startRound();
      if (!isSuccess) {
        return false
      }
      roundsCounter += 1;
    }
    return true;
  }
}
