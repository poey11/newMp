const express = require('express')
const router = express.Router()
const { 
    getSessionAuth,
    getSessionUserId
} = require('../controller/sessionController')

// get session authethecated
router.get('/auth',getSessionAuth)

//get userID from session
router.get('/sessionUserId',getSessionUserId)


module.exports = router