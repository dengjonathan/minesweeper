const prompt = require('prompt');
const Game = require('../game/game');

const playTurn = (err, {row, col}) => {
  // check input for digits
  console.log(row, col);
  Game.checkSpace(+row, +col);
  Game.printBoard();
  prompt.get(['row', 'col'], playTurn);
};

module.exports = playTurn;