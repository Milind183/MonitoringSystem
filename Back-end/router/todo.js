const express = require('express')
const router = express.Router()
const { newTask } = require('../controllers/todo')

// todo 
router.route('/newtask').post(newTask)

module.exports = router
