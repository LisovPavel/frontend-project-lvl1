#!/usr/bin/env node
import { greetings } from '../src/cli.js';
import { brainEven } from './brain-even.js';

const name = greetings();
console.log(brainEven.startGame(3) ? `Congratulations, ${name}!` : `Let's try again, ${name}!`);
