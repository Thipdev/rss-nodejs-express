const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();
const addUser = (user) => usersRepo.postUser(user);
const getById = (id) => usersRepo.getById(id);
const updateUser = (id, user) => usersRepo.putUser(id, user);
const deleteUser = (id) => usersRepo.deleteUser(id);

module.exports = { getAll, addUser, getById, updateUser, deleteUser };
