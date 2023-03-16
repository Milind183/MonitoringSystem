const express = require('express')
const router = express.Router()
const { sayHi } = require('../controllers/basic')

router.route('/hi').get(sayHi)

module.exports = router
