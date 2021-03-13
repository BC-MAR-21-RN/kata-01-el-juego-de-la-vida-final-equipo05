const Cell = require('../src/Cell');
const World = require('../src/World');
const Game = require('../src/Game');

test('can be Cell a New Object', () => {
  expect(new Cell()).toBeInstanceOf(Cell);
});

test('can be World a New Object', () => {
  expect(new World(4, 8)).toBeInstanceOf(World);
});

test('can be Game a New Object', () => {
  expect(new Game()).toBeInstanceOf(Game)
});

test('can be state is alive', () => {
  const cell = new Cell(1)
  const state = cell.cellTransform()
  expect(state).toEqual(expect.stringContaining('*'))
});

test('can be state is die', () => {
  const cell = new Cell(0)
  const state = cell.cellTransform()
  expect(state).toEqual(expect.stringContaining('.'))
});


test('can be a world an array type', () => {
  const newWorld = new World(4, 8);
  const board = newWorld.fillBoard();
  expect(board).toEqual(expect.any(Array));
});

test('can be a neighbor a number', () => {
  const newWorld = new World(4, 8);
  newWorld.fillBoard();
  expect(newWorld.getNeigthbors(0, 0)).toEqual(expect.any(Number));
});

test('can be new state a number', () => {
  const newWorld = new World(4, 8);
  newWorld.fillBoard();
  expect(newWorld.rules(0, 0)).toEqual(expect.any(Number));
});

test('can be new World an array type', () => {
  const newWorld = new World(4, 8);
  newWorld.fillBoard();
  newWorld.rules(0, 0)
  expect(newWorld.newStateOriginalBoard()).toEqual(expect.any(Array));
});