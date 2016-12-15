const prompt = require('prompt');

const introHandler = require('./utils/introHandler');
const inputHandler = require('./utils/inputHandler');
process.stdin.setEncoding('utf8');

console.log('hello world! I am minesweeper.');
prompt.start();
prompt.get([
  {
    name: 'rows',
    message: 'How many rows?',
    default: 10
  },
  {
    name: 'cols',
    message: 'How many cols?',
    default: 10
  },
  {
    name: 'mines',
    message: 'How many mines?',
    default: 3
  }
], introHandler);