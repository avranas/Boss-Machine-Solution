const express = require('express');
const app = require('../server.js');
const minionsRouter = express.Router();
const db = require('./db.js');

minionsRouter.get('/', (req, res, next) => {
   const allMinions = db.getAllFromDatabase('minions');
   res.status(200).send(allMinions);
});

minionsRouter.post('/', (req, res, next) => {
   const newEntry = db.addToDatabase('minions', req.body);
   if(newEntry)
      res.status(201).send(newEntry);
   else
      res.status(400).send();
})

minionsRouter.get('/:minionId', (req, res, next) => {
   const gotMinion = db.getFromDatabaseById('minions', req.params.minionId);
   if(gotMinion)
      res.status(200).send(gotMinion);
   else
      res.status(404).send();
});

minionsRouter.put('/:minionId', (req, res, next) => {
   const updatedMinion = db.updateInstanceInDatabase('minions', req.body);
   if(updatedMinion)
      res.status(202).send(updatedMinion);
   else
      res.status(404).send();
});

minionsRouter.delete('/:minionId', (req, res, next) => {
   const deletedMinion = db.deleteFromDatabasebyId('minions', req.params.minionId.toString());
   if(deletedMinion)
      res.status(204).send();
   else
      res.status(404).send();
});

module.exports = minionsRouter;