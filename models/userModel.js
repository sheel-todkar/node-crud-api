const { users, generateId } = require('../config/db');

class UserModel {
  static getAll() {
    return users;
  }

  static getById(id) {
    const numericId = Number(id);
    return users.find(user => user.id === numericId);
  }

  static create(userData) {
    const newUser = {
      id: generateId(),
      Name: userData.Name,
      age: userData.age || null,
      email: userData.email,
      password: userData.password || null
    };
    users.push(newUser);
    return newUser;
  }

  static update(id, userData) {
    const numericId = Number(id);
    const index = users.findIndex(user => user.id === numericId);
    if (index === -1) return null;

    const updatedUser = {
      ...users[index],
      ...userData,
      id: numericId // Ensure ID doesn't change
    };

    users[index] = updatedUser;
    return updatedUser;
  }

  static delete(id) {
    const numericId = Number(id);
    const index = users.findIndex(user => user.id === numericId);
    if (index === -1) return false;

    users.splice(index, 1);
    return true;
  }
}

module.exports = UserModel;