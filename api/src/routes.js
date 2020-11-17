const express = require("express")
const routes = express.Router()

const PointsController = require('./controllers/PointsController')

routes
    .get('/point', PointsController.index)
    .post('/point', PointsController.create)
module.exports = routes