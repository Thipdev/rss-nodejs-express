const { v4: uuidv4 } = require('uuid');

/**
 * User entity
 */
class User {
  /**
   * Create a new instance
   * @param {User|void} Template for create a new user, on nothing 
   */
  constructor({
    id = uuidv4(),
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
  static toResponse(user) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

module.exports = User;
