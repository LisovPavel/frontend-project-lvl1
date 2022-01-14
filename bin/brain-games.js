#!/usr/bin/env node
import { greetings } from '../src/cli.js';
import { brainGcd } from './brain-gcd.js';

const name = greetings();
console.log(brainGcd.startGame() ? `Congratulations, ${name}!` : `Let's try again, ${name}!`);
