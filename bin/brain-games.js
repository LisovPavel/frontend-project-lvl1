#!/usr/bin/env node
import { greetings } from '../src/cli.js';
import { brainGcd } from './brain-gcd.js';
import { brainProgression } from './brain-progression.js';

const name = greetings();
console.log(brainProgression.startGame() ? `Congratulations, ${name}!` : `Let's try again, ${name}!`);
