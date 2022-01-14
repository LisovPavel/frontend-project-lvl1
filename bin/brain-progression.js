#!/usr/bin/env node

import {CreateGame} from "./game.js";
import {getRandomNumber} from "../src/utils/numbers.js";
import {fibSumProgression, mulProgression, sumProgression} from "../src/utils/progressions.js";


class BrainProgression {
  progressions = [fibSumProgression, sumProgression, mulProgression];
  constructor() {}

  setProgression = () => {
    this.progression = this.progressions[getRandomNumber(this.progressions.length - 1)]();
  }

  getQuestion = () => {
    this.setProgression();
    console.log('this.pro: ', this.progression);
    this.hiddenProgressionNumberIndex = getRandomNumber(this.progression.length - 1);

    return this.progression.map((n, i) => {
      if (i === this.hiddenProgressionNumberIndex) {
        return '..'
      }
      return n;
    }).join(' ');
  }

  getAnswer = () => {
    return this.progression[this.hiddenProgressionNumberIndex];
  }
}

// eslint-disable-next-line import/prefer-default-export
export const brainProgression = new CreateGame(BrainProgression);
