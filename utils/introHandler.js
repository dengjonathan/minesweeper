const prompt = require('prompt');

const Game = require('../game/game');
const inputHandler = require('./inputHandler');

module.exports = (err, prefs) => {
  console.log('I am making you a board with these attributes:', prefs);
  const game = Game.init(parseInt(prefs.rows), parseInt(prefs.cols), parseInt(prefs.mines));
  game.printBoard();
  prompt.get(['row', 'col'], inputHandler);
}