const Task = require('./task.model');

/**
 * Tasks table in memory
 */
const tasks = [];

/**
 * Get tasks by board
 * @param {string} board id 
 * @returns {Promise<Task[]>} list of tasks
 */
const getAll = async (boardId) => {
    const targetTasks = tasks.filter((x) => x.boardId === boardId);
    return targetTasks;
};

/**
 * Get task by id and board
 * @param {string} board id 
 * @param {string} task id 
 * @returns {Promise<Task>} found task
 */
const getById = async (boardId, id) => {
    const task = tasks.find((x) => x.id === id && x.boardId === boardId);
    return task;
};

/**
 * Create task
 * @param {string} board id 
 * @param {Task} a new task 
 * @returns {Promise<Task>} created task
 */
const postTask = async (boardId, task) => {
    const newTask = new Task(task);
    newTask.boardId = boardId;
    tasks.push(newTask);
    return newTask;
};

/**
 * Edit task
 * @param {string} board id 
 * @param {string} task id 
 * @param {Task} edited task 
 * @returns {Promise<Task|number>} edited task or -1 in case if task was not found
 */
const putTask = async (boardId, id, task) => {
    const index = tasks.findIndex((x) => x.id === id && x.boardId === boardId);
    if(index === -1) {
      return undefined;
    }
  
    const { title, order, description, userId, columnId, boardId: b } = task;
    tasks[index].title = title;
    tasks[index].order = order;
    tasks[index].description = description;
    tasks[index].userId = userId;
    tasks[index].columnId = columnId;
    tasks[index].boardId = b;
    return tasks[index];
};

/**
 * Delete task
 * @param {string} board id 
 * @param {string} task id 
 * @returns {Promise<boolean|number>} result of operation or -1 in case if task was not found
 */
const deleteTask = async (boardId, id) => {
    const index = tasks.findIndex((x) => x.id === id && x.boardId === boardId);
    if(index === -1) {
      return undefined;
    }
  
    tasks.splice(index, 1);
    return true;
};

/**
 * Delete all task on the board
 * @param {string} board id 
 * @returns {Promise<void>} void
 */
const deleteByBoard = async (boardId) => {
    const targetTasks = tasks.filter((x) => x.boardId === boardId);
    if(!targetTasks) {
        return;
    }

    targetTasks.forEach((x) => {
        const index = tasks.findIndex((z) => z === x);
        if(index !== -1) {
            tasks.splice(index, 1);
        }
    });
};

/**
 * Unassigned users into boards
 * @param {string} user id 
 * @returns {Promise<void>} void
 */
const unassignedUsers = async (userId) => {
    const targetTasks = tasks.filter((x) => x.userId === userId);
    if(!targetTasks) {
        return;
    }

    targetTasks.forEach((x) => {
        const index = tasks.findIndex((z) => z === x);
        if(index !== -1) {
            tasks[index].userId = null;
        }
    });
};

module.exports = { getAll, getById, postTask, putTask, deleteTask, deleteByBoard, unassignedUsers };