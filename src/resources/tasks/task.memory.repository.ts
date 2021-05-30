/**
 * Task repository
 * @module task repository
 */
import { Task } from './task.model';

/**
 * Tasks table in memory
 */
const tasks: Task[] = [];

/**
 * Get tasks by board
 * @param {string} board id 
 * @returns {Promise<Task[]>} list of tasks
 */
const getAll = async (boardId: string): Promise<Task[]> => {
    const targetTasks = tasks.filter((x) => x.boardId === boardId);
    return targetTasks;
};

/**
 * Get task by id and board
 * @param {string} board id 
 * @param {string} task id 
 * @returns {Promise<Task>} found task
 */
const getById = async (boardId: string, id: string): Promise<Task|undefined> => {
    const task = tasks.find((x) => x.id === id && x.boardId === boardId);
    return task;
};

/**
 * Create task
 * @param {string} board id 
 * @param {Task} a new task 
 * @returns {Promise<Task>} created task
 */
const postTask = async (id: string, task: Task): Promise<Task> => {
    const newTask = new Task(task);
    newTask.boardId = id;
    tasks.push(newTask);
    return newTask;
};

/**
 * Edit task
 * @param {string} board id 
 * @param {string} task id 
 * @param {Task} edited task 
 * @returns {Promise<Task|undefined>} edited task or undefined in case if task was not found
 */
const putTask = async (boardId: string, id: string, task: Task): Promise<Task|undefined> => {
    const index = tasks.findIndex((x) => x.id === id && x.boardId === boardId);
    if(index === -1) {
      return undefined;
    }
  
    const targetTask = tasks[index];
    if(targetTask === undefined) {
        return undefined;
    }

    const { title, order, description, userId, columnId, boardId: b } = task;
    targetTask.title = title;
    targetTask.order = order;
    targetTask.description = description;
    targetTask.userId = userId;
    targetTask.columnId = columnId;
    targetTask.boardId = b;
    return targetTask;
};

/**
 * Delete task
 * @param {string} board id 
 * @param {string} task id 
 * @returns {Promise<boolean|undefined>} result of operation or undefined in case if task was not found
 */
const deleteTask = async (boardId: string, id: string): Promise<boolean|undefined> => {
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
const deleteByBoard = async (boardId: string) => {
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
const unassignedUsers = async (userId: string) => {
    const targetTasks = tasks.filter((x) => x.userId === userId);
    if(!targetTasks) {
        return;
    }

    targetTasks.forEach((x) => {
        const index = tasks.findIndex((z) => z === x);
        if(index !== -1) {
            const task = tasks[index];
            if(task !== undefined) {
                task.userId = null;
            }
        }
    });
};

export { getAll, getById, postTask, putTask, deleteTask, deleteByBoard, unassignedUsers };