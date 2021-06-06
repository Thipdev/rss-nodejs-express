import { v4 } from 'uuid';

/**
 * Column entity
 */
export class Column {
  id: string;

  title: string;

  order: number;

  /**
   * Create a new instance
   * @param {Column|void} Template for create a new column, on nothing
   */
  constructor({
    id = v4(),
    title = 'COLUMN',
    order = 0
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
  }
}