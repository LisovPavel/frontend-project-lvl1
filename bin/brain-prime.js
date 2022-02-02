#!/usr/bin/env node

import {checkPrime, getRandomNumber } from '../src/utils/numbers.js';
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
}

export const brainPrime = new CreateGame(BrainPrime);
