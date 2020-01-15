const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const DevRouter = require('./routers/DevRouter');
const SearchRouter = require('./routers/SearchRouter');

const routes = Router();

routes.use('/devs', DevRouter);
routes.use('/search', SearchRouter);

module.exports = routes;