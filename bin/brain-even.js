import { greetings } from '../src/cli.js';
import { brainEven } from '../src/games/brain-even.js';

const name = greetings();
console.log(brainEven.startGame(1) ? `Congratulations, ${name}!` : `Let's try again, ${name}!`);
