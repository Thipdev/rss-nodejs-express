/**
 * Task service
 * @module task servise
 */
import { Task } from './task.model';
import { getAll, postTask, getById, putTask, deleteTask, deleteByBoard, unassignedUsers } from './task.memory.repository';

export class TaskService {
    /**
     * Get all tasks by board
     * @param {string} board id 
     * @returns {Task[]} list of tasks
     */
    getAll = (boardId: string): Promise<Task[]> => getAll(boardId);

    /**
     * Add task to board
     * @param {string} board id 
     * @param {Task} a new task 
     * @returns {Task} created task
     */
    addTask = (boardId: string, task: Task): Promise<Task> => postTask(boardId, task);
    
    /**
     * Get task from board by id
     * @param {string} board id 
     * @param {string} task id 
     * @returns  {Taskr} found task
     */
    getById = (boardId: string, id: string): Promise<Task|undefined> => getById(boardId, id);
    
    /**
     * Edit task
     * @param {string} board id 
     * @param {string} task id 
     * @param {Task} edited task 
     * @returns {Task|undefined} edited task or undefined in case if task was not found
     */
    updateTask = (boardId: string, id: string, task: Task): Promise<Task|undefined> => putTask(boardId, id, task);
    
    /**
     * Delete task
     * @param {string} board id 
     * @param {string} task id 
     * @returns {void}
     */
    deleteTask = (boardId: string, id: string): Promise<boolean|undefined> => deleteTask(boardId, id);
    
    /**
     * Delete all task on the board
     * @param {string} board id 
     * @returns {void}
     */
    deleteByBoard = (boardId: string): Promise<void> => deleteByBoard(boardId);
    
    /**
     * Unassigned users into boards
     * @param {string} user id 
     * @returns {void}
     */
    unassignedUsers = (userId: string): Promise<void> => unassignedUsers(userId);
}

