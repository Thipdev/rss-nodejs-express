/**
 * User Service
 * @module user service
 */
import { User } from './user.model';
import { getAll, postUser, getById, putUser, deleteUser } from './user.memory.repository';

export class UserService {
    /**
     * Get all users
     * @returns {User[]} list of users
     */
    getAll = (): Promise<User[]> => getAll();

    /**
     * Create user
     * @param {User} a new user 
     * @returns {User} created user
     */
    addUser = (user: User): Promise<User> => postUser(user);

    /**
     * Get user by id
     * @param {string} user's id 
     * @returns {User} found user
     */
    getById = (id: string): Promise<User|undefined>  => getById(id);

    /**
     * Update user
     * @param {string} user id for finding user for edit 
     * @param {User} edited user 
     * @returns {User|number} edited user or undefined in case if user was not found
     */
    updateUser = (id: string, user: User): Promise<User|undefined> => putUser(id, user);

    /**
     * Delete user
     * @param {string} user id for finding user for delete 
     * @returns {boolean|number} result of operation or undefined in case if user was not found
     */
    deleteUser = (id: string): Promise<undefined|boolean> => deleteUser(id);
}