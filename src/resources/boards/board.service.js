const boardRepo = require('./board.memory.repository');

const getAll = () => boardRepo.getAll();
const addBoard = (user) => boardRepo.postBoard(user);
const getById = (id) => boardRepo.getById(id);
const updateBoard = (id, user) => boardRepo.putBoard(id, user);
const deleteBoard = (id) => boardRepo.deleteBoard(id);

module.exports = { getAll, addBoard, getById, updateBoard, deleteBoard };