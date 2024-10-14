const express = require('express')
const router = express.Router();
router.use('/auth', () => console.log(`ok`))

module.exports = router
