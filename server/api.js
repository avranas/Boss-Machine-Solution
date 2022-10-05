const express = require('express');
const app = require('../server');
const apiRouter = express.Router();
const minionsRouter = require('./minions');
apiRouter.use('/minions', minionsRouter);
const ideaRouter = require('./ideas');
apiRouter.use('/ideas', ideaRouter);
const meetingsRouter = require('./meetings');
apiRouter.use('/meetings', meetingsRouter);

module.exports = apiRouter;
