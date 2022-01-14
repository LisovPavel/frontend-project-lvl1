#!/usr/bin/env node

import {CreateGame} from "./game.js";
import {getRandomNumber} from "../src/utils/numbers.js";


class BrainEven {
  number = 0;
  constructor() {}

  checkEven = (nubmer) => !(nubmer % 2);

  getQuestion = () => {
    this.number = getRandomNumber();
    return this.number;
  }

  getAnswer = () => {
    return this.checkEven(this.number) ? 'yes' : 'no';
  }
}

// eslint-disable-next-line import/prefer-default-export
export const brainEven = new CreateGame(BrainEven);
