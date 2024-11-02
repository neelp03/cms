const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const authMiddleware = require('../middleware/auth');

// Protected routes
router.post('/', authMiddleware, userController.createUser);
router.get('/', authMiddleware, userController.getUsers);
router.get('/:id', authMiddleware, userController.getUserById);
router.put('/:id', authMiddleware, userController.updateUser);
router.delete('/:id', authMiddleware, userController.deleteUser);

module.exports = router;
