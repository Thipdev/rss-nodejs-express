/**
 * User repository
 * @module user repository
 */
import { User } from './user.model';

/**
 * Users table in memory
 */
const users : User[] = [];

/**
 * Get all users
 * @returns {Promise<User[]>} List of users
 */
const getAll = async () : Promise<User[]> => users;

/**
 * Get user by id
 * @param {string} user id for search 
 * @returns {Promise<User>} user
 */
const getById = async (id: string): Promise<User|undefined> => {
  const user = users.find((x) => x.id === id);
  return user;
};

/**
 * Create user
 * @param {User} a new user 
 * @returns {Promise<User>} created user
 */
const postUser = async (user: User): Promise<User> => {
  const newUser = new User(user);
  users.push(newUser);
  return newUser;
};

/**
 * Edit user
 * @param {string} user id for finding user for edit 
 * @param {User} edited user 
 * @returns {Promise<User|undefined>} edited user or undefined in case if user was not found
 */
const putUser = async (id: string, user: User): Promise<User|undefined> => {
  const index = users.findIndex((x) => x.id === id);
  if(index === -1) {
    return undefined;
  }

  const { name, login, password } = user;
  const targetUser = users[index];
  if(targetUser === undefined) {
    return undefined;
  }

  targetUser.name = name;
  targetUser.login = login;
  targetUser.password = password;
  return targetUser;
};

/**
 * Delete user
 * @param {string} user id for finding user for delete  
 * @returns {Promise<boolean|undefined>} result of operation or -1 in case if user was not found
 */
const deleteUser = async (id: string): Promise<undefined|boolean> => {
  const index = users.findIndex((x) => x.id === id);
  if(index === -1) {
    return undefined;
  }

  users.splice(index, 1);
  return true;
};

export { getAll, getById, postUser, putUser, deleteUser };
