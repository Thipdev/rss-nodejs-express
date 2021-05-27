const boardRepo = require('./board.memory.repository');

/**
 * Get all boards
 * @returns {Board[]} list of boards
 */
const getAll = () => boardRepo.getAll();

/**
 * Create board
 * @param {Board} a new board 
 * @returns {Board} created board
 */
const addBoard = (board) => boardRepo.postBoard(board);

/**
 * Get board by id
 * @param {string} board's id 
 * @returns {Board} found board
 */
const getById = (id) => boardRepo.getById(id);

/**
 * Update board
 * @param {string} board id for finding board for edit  
 * @param {Board} edited board 
 * @returns {Board|number} edited board or -1 in case if board was not found
 */
const updateBoard = (id, board) => boardRepo.putBoard(id, board);

/**
 * Delete board
 * @param {string} board id for finding board for delete  
 * @returns {boolean|number} result of operation or -1 in case if board was not found
 */
const deleteBoard = (id) => boardRepo.deleteBoard(id);

module.exports = { getAll, addBoard, getById, updateBoard, deleteBoard };