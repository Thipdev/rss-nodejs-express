const { v4: uuidv4 } = require('uuid');
const Column = require('./column.model');

class Board {
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