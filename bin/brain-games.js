#!/usr/bin/env node
import { greetings } from '../src/cli.js';
import { brainPrime } from '../src/games/brain-prime.js';

const name = greetings();
console.log(brainPrime.startGame() ? `Congratulations, ${name}!` : `Let's try again, ${name}!`);
