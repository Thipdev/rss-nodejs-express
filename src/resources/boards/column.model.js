const { v4: uuidv4 } = require('uuid');

/**
 * Column entity
 */
class Column {
  /**
   * Create a new instance
   * @param {Column|void} Template for create a new column, on nothing
   */
  constructor({
    id = uuidv4(),
    title = 'COLUMN',
    order = 0
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
  }
}

module.exports = Column;