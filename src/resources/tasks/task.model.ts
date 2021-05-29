import { v4 } from 'uuid';

/**
 * Task entity
 */
export class Task {
  id: string;
  title: string;
  order: number;
  description: string;
  userId: string|null;
  boardId: string|null;
  columnId: string|null;

  /**
   * Create a new instance
   * @param {Task|void} Template for create a new task, on nothing   
   */
  constructor({
    id = v4(),
    title = 'TITLE',
    order = 0,
    description = 'DESCRIPTION',
    userId = null,
    boardId = null,
    columnId = null
  }: {
    id: string,
    title: string,
    order: number,
    description: string,
    userId: string|null,
    boardId: string|null,
    columnId: string|null
  }) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }
}