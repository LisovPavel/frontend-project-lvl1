#!/usr/bin/env node
import { gcd, getRandomNumber } from '../src/utils/numbers.js';
import { CreateGame } from './game.js';

class BrainGcd {
  constructor() {
    this.firstNumber = 0;
    this.secondNumber = 0;
  }

  prepareNumbers() {
    this.firstNumber = getRandomNumber(100);
    this.secondNumber = getRandomNumber(100);
  }

  getQuestion() {
    this.prepareNumbers();
    return `${this.firstNumber} ${this.secondNumber}`;
  }

  getAnswer() {
    return gcd(this.firstNumber, this.secondNumber);
  }
}

export const brainGcd = new CreateGame(BrainGcd);