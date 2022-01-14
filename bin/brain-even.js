#!/usr/bin/env node

import { CreateGame } from './game.js';
import { checkEven, getRandomNumber } from '../src/utils/numbers.js';

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
}

export const brainEven = new CreateGame(BrainEven);
