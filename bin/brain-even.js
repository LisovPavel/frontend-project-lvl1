#!/usr/bin/env node

import {Game} from "./game.js";
import {getRandomNumber} from "../src/utils/numbers.js";

const checkEven = (nubmer) => !(nubmer % 2);



class BrainEvenQuestions {
  number = 0;
  constructor() {}

  getQuestion = () => {
    this.number = getRandomNumber();
    return this.number;
  }

  getAnswer = () => {
    return checkEven(this.number) ? 'yes' : 'no';
  }
}

const brainEvenQuestions = new BrainEvenQuestions();

// eslint-disable-next-line import/prefer-default-export
export const brainEven = new Game(brainEvenQuestions.getQuestion, brainEvenQuestions.getAnswer);
