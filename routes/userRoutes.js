const express = require('express');
const UserController = require('../controllers/userController');
const router = express.Router();

// Validation middleware
const validateUser = (req, res, next) => {
  const user = req.body;
  
  if (req.method === 'POST' || req.method === 'PUT') {
    if (!user.Name || typeof user.Name !== 'string') {
      return res.status(400).json({ error: 'Name is required and must be a string' });
    }
    
    if (!user.email || typeof user.email !== 'string' || !user.email.includes('@')) {
      return res.status(400).json({ error: 'Valid email is required' });
    }
    
    if (user.age && (typeof user.age !== 'number' || user.age < 0)) {
      return res.status(400).json({ error: 'Age must be a positive number' });
    }
  }
  
  next();
};

// Routes
router.get('/', UserController.getAllUsers);
router.get('/:id', UserController.getUserById);
router.post('/', validateUser, UserController.createUser);
router.put('/:id', validateUser, UserController.updateUser);
router.delete('/:id', UserController.deleteUser);

module.exports = router;