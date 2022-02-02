#!/usr/bin/env node

import { CreateGame } from '../../bin/game.js';
import { checkEven, getRandomNumber } from '../utils/numbers.js';

class BrainEven {
  constructor() {
    this.number = 0;
  }

  getQuestion() {
    this.number = getRandomNumber();
    return this.number;
  }

  getAnswer() {
    return checkEven(this.number) ? 'yes' : 'no';
  }

  // eslint-disable-next-line class-methods-use-this
  showRules() {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
  }
}

export const brainEven = new CreateGame(BrainEven);
