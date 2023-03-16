const express = require('express')
const router = express.Router()
const {newNotice , getData} = require('../controllers/notice')

router.route('/hello').get(newNotice)

router.route('/data').post(getData)

module.exports = router
