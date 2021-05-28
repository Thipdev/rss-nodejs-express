/**
 * Board repository
 * @module board repository
 */
const Board = require('./board.model');

/**
 * Boards table in memory
 */
const boards = [];

/**
 * Get all boards
 * @returns {Promise<Board[]>} list of boards
 */
const getAll = async () => boards;

/**
 * Get board by id
 * @param {string} board id for search
 * @returns {Promise<Board>} board
 */
const getById = async (id) => boards.find((x) => x.id === id);

/**
 * Create board
 * @param {Board} a new board 
 * @returns {Promise<Board>} created board
 */
const postBoard = async (board) => {
    const newBoard = new Board(board);
    boards.push(newBoard);
    return newBoard;
};

/**
 * Edit board
 * @param {string} board id for finding board for edit  
 * @param {Board} edited board 
 * @returns {Promise<Board|number>} edited board or -1 in case if board was not found
 */
const putBoard = async (id, board) => {
    const index = boards.findIndex((x) => x.id === id);
    if(index === -1) {
      return undefined;
    }
  
    const { title, columns } = board;
    boards[index].title = title;
    columns.forEach((x) => {
        const i = boards[index].columns.findIndex((z) => z.id === x.id);
        if(i !== -1) {
            const { title: t, order } = x;
            boards[index].columns[i].title = t;
            boards[index].columns[i].order = order;
        }
    });

    return boards[index];
};

/**
 * Delete board
 * @param {string} board id for finding board for delete   
 * @returns {Promise<boolean|number>} result of operation or -1 in case if board was not found
 */
const deleteBoard = async (id) => {
    const index = boards.findIndex((x) => x.id === id);
    if(index === -1) {
        return undefined;
    }

    boards.splice(index, 1);
    return true;
};

module.exports = { getAll, getById, postBoard, deleteBoard, putBoard };