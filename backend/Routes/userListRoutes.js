const express = require('express');
const userListController = require('../Controllers/userListController');

const router = express.Router();

router.post('/addTodo', userListController.addTodo);

router.post('/deleteTodo', userListController.deleteTodo);

router.post('/loadList', userListController.loadList);

module.exports = router;