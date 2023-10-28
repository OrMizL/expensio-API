const express = require('express')
const router = express.Router()

// define the home page route
router.get('/', (req, res) => {
    res.send('Get User')
})
router.post('/', (req, res) => {
    res.send('Post User')
})

module.exports = router