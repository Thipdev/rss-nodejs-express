import { v4 } from 'uuid';

/**
 * User entity
 */
export class User {
  id: string;

  name: string;

  login: string;

  password: string;

  /**
   * Create a new instance
   * @param {User|void} Template for create a new user, on nothing 
   */
  constructor({
    id = v4(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd'
  } = {}) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  /**
   * Create view model
   * @param {User} user for create view model 
   * @returns {object} a new object without password field
   */
  static toResponse(user : User) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}


