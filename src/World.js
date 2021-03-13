const Cell = require('./Cell')

class World {
  constructor(row, column) {
    this.row = row
    this.column = column
    this.board = Array(this.row).fill().map(() => Array(this.column).fill(0))
    this.newBoard = Array(this.row).fill().map(() => Array(this.column).fill(0))
  }

  fillBoard() {
    for (let row = 0; row < this.row; row++) {
      for (let column = 0; column < this.column; column++) {
        this.board[row][column] = new Cell(Math.floor(Math.random() * 2))
      }
    }

    return this.board;
  }

  getBoard() {
    this.board.forEach((row) => {
      let cellState = ""
      row.forEach((column) => cellState += `${column.cellTransform()}`)
      console.log(cellState)
    })
  }

  getNeigthbors(rowCell, columnCell) {
    let totalNeighbors = 0;
    let positionNeighbors = [
      [rowCell, columnCell - 1],
      [rowCell + 1, columnCell - 1],
      [rowCell + 1, columnCell],
      [rowCell + 1, columnCell + 1],
      [rowCell, columnCell + 1],
      [rowCell - 1, columnCell + 1],
      [rowCell - 1, columnCell],
      [rowCell - 1, columnCell - 1]
    ]

    for (let row = 0; row < positionNeighbors.length; row++) {
      let rowPosition = positionNeighbors[row][0];
      let columnPosition = positionNeighbors[row][1];
      if (rowPosition >= 0 && columnPosition >= 0 && rowPosition < this.row && columnPosition < this.column) {
        totalNeighbors += this.board[rowPosition][columnPosition].state;
      }
    }

    return totalNeighbors;
  }

  rules(rowCell, columnCell) {
    let totalNeighbors = this.getNeigthbors(rowCell, columnCell)
    let newState = this.board[rowCell][columnCell].state

    if (this.board[rowCell][columnCell].state) {
      if (totalNeighbors < 2) newState = 0
      else if (totalNeighbors > 3) newState = 0
      else if (totalNeighbors == 2 || totalNeighbors == 3) newState = 1
    } else {
      if (totalNeighbors == 3) newState = 1
    }

    this.newBoard[rowCell][columnCell] = newState

    return newState
  }

  newStateOriginalBoard() {
    for (let row = 0; row < this.row; row++) {
      for (let column = 0; column < this.column; column++) {
        this.board[row][column].state = this.newBoard[row][column]
      }
    }

    return this.board
  }

}

module.exports = World