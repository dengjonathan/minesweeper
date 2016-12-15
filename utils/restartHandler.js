const prompt = require('prompt');

const introHandler = require('./introHandler');
const inputHandler = require('./inputHandler');

module.exports = () => {
  process.stdin.setEncoding('utf8');
  prompt.start();
  prompt.get([{
    name: 'rows',
    message: 'How many rows?',
    default: 10
  }, {
    name: 'cols',
    message: 'How many cols?',
    default: 10
  }, {
    name: 'mines',
    message: 'How many mines?',
    default: 3
  }], introHandler);
}