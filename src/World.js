const Cell = require('./Cell')

class World {
  constructor(row, column) {
    this.row = row
    this.column = column
    this.board = new Array(this.row);
    this.newBoard = []
  }

  fillBoard() {
    for (let column = 0; column < this.column; column++) this.board[column] = new Array(this.column)
    for (let row = 0; row < this.row; row++) {
      for (let column = 0; column < this.column; column++) {
        this.board[row][column] = new Cell(Math.floor(Math.random() * 2))
      }
    }

    return this.board;
  }

  neigthbors(rowCell, columnCell) {
    let neighbors;
    for (let x = 0; x < col; x++) {
      for (let y = 0; y < row; y++) {

        matrix[x][y]

        neighbors += matrix[(x) % this.row, (y - 1) % this.column]
        neighbors += matrix[(x) % row][(y - 1) % col]
        neighbors += matrix[(x + 1) % row, (y - 1) % col]
        neighbors += matrix[(x + 1) % row, (y) % col]
        neighbors += matrix[(x + 1) % row][(y + 1) % col]
        neighbors += matrix[(x) % row][(y + 1) % col]
        neighbors += matrix[(x - 1) % row][(y + 1) % col]
        neighbors += matrix[(x - 1) % row][(y) % col]
        neighbors += matrix[(x - 1) % row][(y - 1) % col];

      }

      return neigthbors;
    }
  }
}

module.exports = World