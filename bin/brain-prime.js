#!/usr/bin/env node

import { checkPrime, getRandomNumber } from '../src/utils/numbers.js';
import { CreateGame } from './game.js';

class BrainPrime {
  constructor() {
    this.number = 0;
  }

  getQuestion() {
    this.number = getRandomNumber();
    return this.number;
  }

  getAnswer() {
    return checkPrime(this.number) ? 'yes' : 'no';
  }

  // eslint-disable-next-line class-methods-use-this
  showRules() {
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  }
}

export const brainPrime = new CreateGame(BrainPrime);
