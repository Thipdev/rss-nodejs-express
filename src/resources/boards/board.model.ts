import { v4 } from 'uuid';
import { Column } from './column.model';

/**
 * Board entity
 */
export class Board {
  id: string;

  title: string;

  columns: Column[];

  /**
   * Create a new instance
   * @param {Board|void} Template for create a new board, on nothing  
   */
  constructor({
    id = v4(),
    title = 'BOARD',
    columns = new Array<Column>()
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns.map((x) => new Column(x));
  }
}