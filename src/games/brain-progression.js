#!/usr/bin/env node

import { CreateGame } from '../../bin/game.js';
import { getRandomNumber } from '../utils/numbers.js';
import { fibSumProgression, mulProgression, sumProgression } from '../utils/progressions.js';

class BrainProgression {
  constructor() {
    this.progressions = [fibSumProgression, sumProgression, mulProgression];
  }

  setProgression() {
    this.progression = this.progressions[getRandomNumber(this.progressions.length - 1)]();
  }

  getQuestion() {
    this.setProgression();
    console.log('this.pro: ', this.progression);
    this.hiddenProgressionNumberIndex = getRandomNumber(this.progression.length - 1);

    return this.progression.map((n, i) => {
      if (i === this.hiddenProgressionNumberIndex) {
        return '..';
      }
      return n;
    }).join(' ');
  }

  getAnswer() {
    return this.progression[this.hiddenProgressionNumberIndex];
  }

  // eslint-disable-next-line class-methods-use-this
  showRules() {
    console.log('What number is missing in the progression?');
  }
}

export const brainProgression = new CreateGame(BrainProgression);
