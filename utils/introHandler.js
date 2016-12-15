const prompt = require('prompt');

const Game = require('../game/game');
const inputHandler = require('./inputHandler');

module.exports = (err, prefs) => {
  console.log('intro', prefs);
  const game = new Game(parseInt(prefs.rows), parseInt(prefs.cols), parseInt(prefs.mines));
  game.printBoard();
  prompt.get('row', inputHandler);
}