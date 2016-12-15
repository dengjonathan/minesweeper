const restart = require('../utils/restartHandler');

class Game {
  constructor(rows, cols, mines) {
    this.board = this.createBoard(rows, cols, mines);
  }
  createBoard(rows, cols, mines) {
    const row = Array.from(Array(cols)).map(_ => 0);
    const matrix = Array.from(Array(rows)).map(_ => row.slice());
    return this.createMines(matrix, rows, cols, mines);
  }
  createMines(matrix, rows=matrix.length, cols=matrix[0].length, mines=3) {
    let placed = 0;
    while (placed < mines) {
      const randRow = Math.floor(Math.random() * rows);
      const randCol = Math.floor(Math.random() * cols);
      if (matrix[randRow][randCol] !== 1) {
        matrix[randRow][randCol] = 1;
        placed++;
      }
    }
    return matrix;
  }
  printBoard() {
    console.log(this.board.map(row => {
      return row.join(' ').toString().replace(/1/g, '0') + '\n'
    }).join(''));
  }
  checkSpace(row, col) {
    console.log(row, col);
    if (row >= this.board.length || col >= this.board[0].length) {
      return console.log('this is outside board');
    }
    if (this.board[row][col] === 1) {
      console.log('You hit a mine!');
      restartGame();
    }
    this.board[row][col] = '_';
  }
}

let game;

module.exports = {
  init: (rows, cols, mines) => {
    game = new Game(rows, cols, mines)
    return game;
  },
  checkSpace: (row, col) => game.checkSpace(row, col),
  printBoard: (row, col) => game.printBoard(game)
};