import {
  ask, failMessage, listenAnswer, successMessage,
} from '../src/utils/questions.js';

export class CreateGame {
  constructor(Game) {
    this.game = new Game();
  }

  startRound() {
    const question = this.game.getQuestion();
    const answer = this.game.getAnswer();
    ask(question);
    const userAnswer = listenAnswer();

    if (userAnswer === answer.toString()) {
      successMessage();
      return true;
    }
    failMessage(userAnswer, answer);
    return false;
  }

  startGame(rounds = 3) {
    this.game.showRules();
    let roundsCounter = 0;
    while (roundsCounter < rounds) {
      const isSuccess = this.startRound();
      if (!isSuccess) {
        return false;
      }
      roundsCounter += 1;
    }
    return true;
  }
}
