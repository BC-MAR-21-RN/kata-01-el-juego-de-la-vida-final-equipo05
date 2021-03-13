const World = require('./World');

class Game {
  constructor() {}

  play() {
    let world = new World(4, 8);
    world.fillBoard();
    world.getBoard();

    for (let rowCell = 0; rowCell < world.row; rowCell++) {
      for (let columnCell = 0; columnCell < world.column; columnCell++) {
        world.rules(rowCell, columnCell)
      }
    }

    world.newStateOriginalBoard();
    console.log("\n")
    world.getBoard();
  }
}

let game = new Game()
game.play()

module.exports = Game