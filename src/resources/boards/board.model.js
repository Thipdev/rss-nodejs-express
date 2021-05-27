const { v4: uuidv4 } = require('uuid');
const Column = require('./column.model');

/**
 * Board entity
 */
class Board {
  /**
   * Create a new instance
   * @param {Board|void} Template for create a new board, on nothing  
   */
  constructor({
    id = uuidv4(),
    title = 'BOARD',
    columns = []
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns.map((x) => new Column(x));
  }
}

module.exports = Board;