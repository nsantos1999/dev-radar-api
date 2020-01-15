
const { Router } = require('express');
const SearchController = require('../controllers/SearchController');

const routes = Router();

routes.use('/', SearchController.index);

module.exports = routes;