/**
 * Board service
 * @module board service
 */
import { getAll, postBoard, getById, putBoard, deleteBoard } from './board.memory.repository';
import { Board } from './board.model';

export class BoardService {
    /**
     * Get all boards
     * @returns {Board[]} list of boards
     */
    getAll = (): Promise<Board[]> => getAll();

    /**
     * Create board
     * @param {Board} a new board 
     * @returns {Board} created board
     */
    addBoard = (board: Board): Promise<Board> => postBoard(board);
    
    /**
     * Get board by id
     * @param {string} board's id 
     * @returns {Board} found board
     */
    getById = (id: string): Promise<Board|undefined> => getById(id);
    
    /**
     * Update board
     * @param {string} board id for finding board for edit  
     * @param {Board} edited board 
     * @returns {Board|undefined} edited board or undefined in case if board was not found
     */
    updateBoard = (id: string, board: Board): Promise<Board|undefined> => putBoard(id, board);
    
    /**
     * Delete board
     * @param {string} board id for finding board for delete  
     * @returns {boolean|undefined} result of operation or undefined in case if board was not found
     */
    deleteBoard = (id: string): Promise<boolean|undefined> => deleteBoard(id);
}