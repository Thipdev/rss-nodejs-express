const User = require('./user.model');

const users = [];

const getAll = async () => users;

const getById = async (id) => {
  const user = users.find((x) => x.id === id);
  return user;
};

const postUser = async (user) => {
  const newUser = new User(user);
  users.push(newUser);
  return newUser;
};

const putUser = async (id, user) => {
  const index = users.findIndex((x) => x.id === id);
  if(index === -1) {
    return undefined;
  }

  const { name, login, password } = user;
  users[index].name = name;
  users[index].login = login;
  users[index].password =password;
  return users[index];
};

const deleteUser = async (id) => {
  const index = users.findIndex((x) => x.id === id);
  if(index === -1) {
    return undefined;
  }

  users.splice(index, 1);
  return true;
};

module.exports = { getAll, getById, postUser, putUser, deleteUser };
