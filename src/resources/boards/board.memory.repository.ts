/**
 * Board repository
 * @module board repository
 */
import { Board } from './board.model';

/**
 * Boards table in memory
 */
const boards: Board[] = [];

/**
 * Get all boards
 * @returns {Promise<Board[]>} list of boards
 */
const getAll = async (): Promise<Board[]> => boards;

/**
 * Get board by id
 * @param {string} board id for search
 * @returns {Promise<Board>} board
 */
const getById = async (id: string): Promise<Board|undefined> => boards.find((x) => x.id === id);

/**
 * Create board
 * @param {Board} a new board 
 * @returns {Promise<Board>} created board
 */
const postBoard = async (board: Board): Promise<Board> => {
    const newBoard = new Board(board);
    boards.push(newBoard);
    return newBoard;
};

/**
 * Edit board
 * @param {string} board id for finding board for edit  
 * @param {Board} edited board 
 * @returns {Promise<Board|undefined>} edited board or undefined in case if board was not found
 */
const putBoard = async (id: string, board: Board): Promise<Board|undefined> => {
    const index = boards.findIndex((x) => x.id === id);
    if(index === -1) {
      return undefined;
    }
  
    const targetBoard = boards[index];
    if(targetBoard === undefined) {
        return undefined;
    }

    const { title, columns } = board;
    targetBoard.title = title;
    columns.forEach((x) => {
        const i = targetBoard.columns.findIndex((z) => z.id === x.id);
        if(i !== -1) {
            const { title: t, order } = x;
            let targetColumn = targetBoard.columns[i];
            if(targetColumn !== undefined) {
                targetColumn.title = t;
                targetColumn.order = order;
            }
        }
    });

    return boards[index];
};

/**
 * Delete board
 * @param {string} board id for finding board for delete   
 * @returns {Promise<undefined|boolean>} result of operation or undefined in case if board was not found
 */
const deleteBoard = async (id: string): Promise<undefined|boolean> => {
    const index = boards.findIndex((x) => x.id === id);
    if(index === -1) {
        return undefined;
    }

    boards.splice(index, 1);
    return true;
};

export { getAll, getById, postBoard, deleteBoard, putBoard };