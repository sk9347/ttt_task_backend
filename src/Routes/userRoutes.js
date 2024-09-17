// routes/user.routes.js
const express = require('express');
const { createUser, getUsers, updateUserById, deleteUserById } = require('../controllers/user.controller');
const router = express.Router();

router.post('/createUser', createUser); 
router.get('/users', getUsers);
router.put('/users/:id', updateUserById);
router.delete('/users/:id', deleteUserById);

module.exports = router;
