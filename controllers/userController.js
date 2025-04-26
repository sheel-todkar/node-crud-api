const UserModel = require('../models/userModel');

class UserController {
  static getAllUsers(req, res) {
    try {
      const users = UserModel.getAll();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static getUserById(req, res) {
    try {
      const id = parseInt(req.params.id);
      const user = UserModel.getById(id);

      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static createUser(req, res) {
    try {
      const { Name, age, email, password } = req.body;

      if (!Name || !email) {
        return res.status(400).json({ error: 'Name and email are required' });
      }

      const newUser = UserModel.create({ Name, age, email, password });
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static updateUser(req, res) {
    try {
      const id = parseInt(req.params.id);
      const userData = req.body;

      const updatedUser = UserModel.update(id, userData);

      if (updatedUser) {
        res.json(updatedUser);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static deleteUser(req, res) {
    try {
      const id = parseInt(req.params.id);
      const success = UserModel.delete(id);

      if (success) {
        res.status(204).end();
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = UserController;