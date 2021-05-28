/**
 * Task service
 * @module task servise
 */
const tasksRepo = require('./task.memory.repository');

/**
 * Get all tasks by board
 * @param {string} board id 
 * @returns {Task[]} list of tasks
 */
const getAll = (boardId) => tasksRepo.getAll(boardId);

/**
 * Add task to board
 * @param {string} board id 
 * @param {Task} a new task 
 * @returns {Task} created task
 */
const addTask = (boardId, task) => tasksRepo.postTask(boardId, task);

/**
 * Get task from board by id
 * @param {string} board id 
 * @param {string} task id 
 * @returns  {Taskr} found task
 */
const getById = (boardId, id) => tasksRepo.getById(boardId, id);

/**
 * Edit task
 * @param {string} board id 
 * @param {string} task id 
 * @param {Task} edited task 
 * @returns {Task|number} edited task or -1 in case if task was not found
 */
const updateTask = (boardId, id, task) => tasksRepo.putTask(boardId, id, task);

/**
 * Delete task
 * @param {string} board id 
 * @param {string} task id 
 * @returns {void}
 */
const deleteTask = (boardId, id) => tasksRepo.deleteTask(boardId, id);

/**
 * Delete all task on the board
 * @param {string} board id 
 * @returns {void}
 */
const deleteByBoard = (boardId) => tasksRepo.deleteByBoard(boardId);

/**
 * Unassigned users into boards
 * @param {string} user id 
 * @returns {void}
 */
const unassignedUsers = (userId) => tasksRepo.unassignedUsers(userId);

module.exports = { getAll, addTask, getById, updateTask, deleteTask, deleteByBoard, unassignedUsers };