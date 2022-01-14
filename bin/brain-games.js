#!/usr/bin/env node
import { greetings } from '../src/cli.js';
import { brainCalc } from './brain-calc.js';

const name = greetings();
console.log(brainCalc.startGame(3) ? `Congratulations, ${name}!` : `Let's try again, ${name}!`);
