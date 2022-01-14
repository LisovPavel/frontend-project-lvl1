#!/usr/bin/env node
import { getRandomNumber } from '../src/utils/numbers.js';
import { CreateGame } from './game.js';

class BrainCalc {
  constructor() {
    this.operators = ['-', '+', '*'];
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.operator = '-';
  }

  prepareNumbers() {
    this.firstNumber = getRandomNumber(100);
    this.secondNumber = getRandomNumber(100);
    this.operator = this.operators[getRandomNumber(3)];
  }

  get expression() {
    return `${this.firstNumber} ${this.operator} ${this.secondNumber}`;
  }

  getQuestion() {
    this.prepareNumbers();
    return this.expression;
  }

  getAnswer() {
    return eval(this.expression);
  }
}

export const brainCalc = new CreateGame(BrainCalc);
