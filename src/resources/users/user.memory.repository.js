const User = require('./user.model');

/**
 * Users table in memory
 */
const users = [];

/**
 * Get all users
 * @returns {Promise<User[]>} List of users
 */
const getAll = async () => users;

/**
 * Get user by id
 * @param {string} user id for find 
 * @returns {Promise<User>} user
 */
const getById = async (id) => {
  const user = users.find((x) => x.id === id);
  return user;
};

/**
 * Create user
 * @param {User} a new user 
 * @returns {Promise<User>} created user
 */
const postUser = async (user) => {
  const newUser = new User(user);
  users.push(newUser);
  return newUser;
};

/**
 * Edit user
 * @param {string} user id for finding user for edit 
 * @param {User} edited user 
 * @returns {Promise<User|number>} edited user or -1 in case if user was not found
 */
const putUser = async (id, user) => {
  const index = users.findIndex((x) => x.id === id);
  if(index === -1) {
    return undefined;
  }

  const { name, login, password } = user;
  users[index].name = name;
  users[index].login = login;
  users[index].password = password;
  return users[index];
};

/**
 * Delete user
 * @param {string} user id for finding user for delete  
 * @returns {Promise<boolean|number>} result of operation or -1 in case if user was not found
 */
const deleteUser = async (id) => {
  const index = users.findIndex((x) => x.id === id);
  if(index === -1) {
    return undefined;
  }

  users.splice(index, 1);
  return true;
};

module.exports = { getAll, getById, postUser, putUser, deleteUser };
