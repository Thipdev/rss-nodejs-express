const usersRepo = require('./user.memory.repository');

/**
 * Get all users
 * @returns {User[]} list of users
 */
const getAll = () => usersRepo.getAll();

/**
 * Create user
 * @param {User} a new user 
 * @returns {User} created user
 */
const addUser = (user) => usersRepo.postUser(user);

/**
 * Get user by id
 * @param {string} user's id 
 * @returns {User} found user
 */
const getById = (id) => usersRepo.getById(id);

/**
 * Update user
 * @param {string} user id for finding user for edit 
 * @param {User} edited user 
 * @returns {User|number} edited user or -1 in case if user was not found
 */
const updateUser = (id, user) => usersRepo.putUser(id, user);

/**
 * Delete user
 * @param {string} user id for finding user for delete 
 * @returns {boolean|number} result of operation or -1 in case if user was not found
 */
const deleteUser = (id) => usersRepo.deleteUser(id);

module.exports = { getAll, addUser, getById, updateUser, deleteUser };
