const { v4: uuidv4 } = require('uuid');

/**
 * Task entity
 */
class Task {
  /**
   * Create a new instance
   * @param {Task|void} Template for create a new task, on nothing   
   */
  constructor({
    id = uuidv4(),
    title = 'TITLE',
    order = 0,
    description = 'DESCRIPTION',
    userId = null,
    boardId = null,
    columnId = null
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }
}

module.exports = Task;