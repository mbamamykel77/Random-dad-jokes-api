const express = require ('express');
const apiController = require ('../controllers/api_controller')
const router = express.Router()

router.get('/apiRequest', apiController.randomDadJokes)


module.exports = {
    apiRouter: router
}