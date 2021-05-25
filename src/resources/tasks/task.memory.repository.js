const Task = require('./task.model');

const tasks = [];

const getAll = async (boardId) => {
    const targetTasks = tasks.filter((x) => x.boardId === boardId);
    return targetTasks;
};

const getById = async (boardId, id) => {
    const task = tasks.find((x) => x.id === id && x.boardId === boardId);
    return task;
};

const postTask = async (boardId, task) => {
    const newTask = new Task(task);
    newTask.boardId = boardId;
    tasks.push(newTask);
    return newTask;
};

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

const deleteTask = async (boardId, id) => {
    const index = tasks.findIndex((x) => x.id === id && x.boardId === boardId);
    if(index === -1) {
      return undefined;
    }
  
    tasks.splice(index, 1);
    return true;
};

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