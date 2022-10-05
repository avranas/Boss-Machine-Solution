const express = require('express');
const app = require('../server.js');
const checkMillionDollarIdea = require('./checkMillionDollarIdea.js');
const ideaRouter = express.Router();
const db = require('./db.js');

ideaRouter.get('/', (req, res, next) => {
   const allIdeas = db.getAllFromDatabase('ideas');
   res.status(200).send(allIdeas);
});

ideaRouter.post('/', (req, res, next) => {
   if(checkMillionDollarIdea(req, res, next)){
      const newIdea = req.body;
      if(newIdea){
         db.addToDatabase('ideas', newIdea);
         res.status(201).send(newIdea);
      }else{
         res.status(400).send();
      }
   }
});

ideaRouter.get('/:ideaId', (req, res, next) => {
   const gotIdea = db.getFromDatabaseById('ideas', req.params.ideaId);
   if(gotIdea)
      res.status(200).send(gotIdea);
   else
      res.status(404).send();
});

ideaRouter.put('/:ideaId', (req, res, next) => {
   const updatedIdea = db.updateInstanceInDatabase('ideas', req.body);
   if(updatedIdea)
      res.status(202).send(updatedIdea);
   else
      res.status(404).send();
});

ideaRouter.delete('/:ideaId', (req, res, next) => {
   const deletedIdea = db.deleteFromDatabasebyId('ideas', req.params.ideaId.toString());
   if(deletedIdea)
      res.status(204).send();
   else
      res.status(404).send();
});

module.exports = ideaRouter;