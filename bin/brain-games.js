#!/usr/bin/env node
import { greetings } from '../src/cli.js';
import { playBrainEven } from './brain-even.js';

const name = greetings();
console.log(playBrainEven() ? `Congratulations, ${name}!` : `Let's try again, ${name}!`);
