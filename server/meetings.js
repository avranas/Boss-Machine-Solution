const express = require('express');
const app = require('../server.js');
const meetingsRouter = express.Router();
const db = require('./db.js');

meetingsRouter.get('/', (req, res, next) => {
   const allMeetings = db.getAllFromDatabase('meetings');
   res.status(200).send(allMeetings);
});

meetingsRouter.post('/', (req, res, next) => {
   const newMeeting = db.createMeeting();
   const newEntry = db.addToDatabase('meetings', newMeeting);
   if(newEntry)
      res.status(201).send(newMeeting);
   else
      res.status(400).send();
})

meetingsRouter.get('/:meetingId', (req, res, next) => {
   const gotMeeting = db.getFromDatabaseById('meetings', req.params.meetingId);
   if(gotMeeting)
      res.status(200).send(gotMeeting);
   else
      res.status(404).send();
});

meetingsRouter.put('/:meetingId', (req, res, next) => {
   const updatedMeeting = db.updateInstanceInDatabase('meetings', req.body);
   if(updatedMeeting)
      res.status(202).send(updatedMeeting);
   else
      res.status(404).send();
});

meetingsRouter.delete('/', (req, res, next) => {
   const deletedMeeting = db.deleteAllFromDatabase('meetings');
   if(deletedMeeting)
      res.status(204).send();
   else
      res.status(404).send();
});

module.exports = meetingsRouter;