const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.post('/games', controllers.createGame)

router.get('/games', controllers.getAllGame)

router.delete('/games/:id', controllers.deleteGame)

module.exports = router
