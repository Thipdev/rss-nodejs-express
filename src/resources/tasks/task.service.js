const tasksRepo = require('./task.memory.repository');

/**
 * Get all tasks by board
 * @param {string} board id 
 * @returns {Task[]} list of tasks
 */
const getAll = (boardId) => tasksRepo.getAll(boardId);

/**
 * 
 * @param {*} boardId 
 * @param {*} task 
 * @returns 
 */
const addTask = (boardId, task) => tasksRepo.postTask(boardId, task);
const getById = (boardId, id) => tasksRepo.getById(boardId, id);
const updateTask = (boardId, id, task) => tasksRepo.putTask(boardId, id, task);
const deleteTask = (boardId, id) => tasksRepo.deleteTask(boardId, id);
const deleteByBoard = (boardId) => tasksRepo.deleteByBoard(boardId);
const unassignedUsers = (userId) => tasksRepo.unassignedUsers(userId);

module.exports = { getAll, addTask, getById, updateTask, deleteTask, deleteByBoard, unassignedUsers };