class Game {
  constructor(rows, cols, mines) {
    this.board = this.createBoard(rows, cols, mines);
  }
  createBoard(rows, cols, mines) {
    const row = Array.from(Array(cols)).map(_ => 0);
    const matrix = Array.from(Array(rows)).map(_ => row);
    return this.createMines(matrix, rows, cols, mines);
  }
  createMines(matrix, rows=matrix.length, cols=matrix[0].length, mines=3) {
    let placed = 0;
    while (placed < mines) {
      const randRow = Math.floor(Math.random() * rows);
      const randCol = Math.floor(Math.random() * cols);
      if (!matrix[randRow][randCol]) {
        matrix[randRow][randCol] = 1;
        placed++;
      }
    }
    return matrix;
  }
  printBoard() {
    this.board.map(row => row.join(' ') + '\n')
      .forEach(console.log);
  }
  checkSpace(row, col) {
    if (row >= this.board.length || col >= this.board[0].length) {
      return console.log('this is outside board');
    }
    if (this.board[row][col] === 1) {
      //lose
    }
    this.board[row][col] = '_';
  }
}

module.exports = Game;