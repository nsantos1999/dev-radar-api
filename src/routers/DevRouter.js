
const { Router } = require('express');
const DevController = require('../controllers/DevController');

const routes = Router();

routes.post('/', DevController.store);
routes.get('/', DevController.index);

module.exports = routes;