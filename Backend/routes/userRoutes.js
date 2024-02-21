// userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/profile', userController.getUserProfile);
router.put('/profile', userController.updateUserProfile);
router.get('/', userController.getAllUsers); // Only for admin
router.delete('/:id', userController.deleteUser); // Only for admin

module.exports = router;
