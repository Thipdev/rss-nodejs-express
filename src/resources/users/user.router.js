const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');
const taskServise = require('../tasks/task.service');

router.route('/')
  .get(async (req, res) => {
    const users = await usersService.getAll();
    // map user fields to exclude secret fields like "password"
    res.json(users.map(User.toResponse));
  })
  .post(async (req, res) => {
    const user = await usersService.addUser(req.body);
    res.status(201).json(User.toResponse(user));
  });

router.route('/:id')
  .get(async (req, res) => {
    const user = await usersService.getById(req.params.id);
    if(!user) {
      res.status(404).json({ error: 'User was not found.' });
    } 

    res.json(User.toResponse(user));
  })
  .put(async (req, res) => {
    const user = await usersService.updateUser(req.params.id, req.body);
    if(!user) {
      res.status(400).json({ error: 'User was not found.' });
    }

    res.json(User.toResponse(user));
  })
  .delete(async (req, res) => {
    const result = await usersService.deleteUser(req.params.id);
    if(!result) {
      res.status(404).json({ error: 'User was not found.' });
    }

    await taskServise.unassignedUsers(req.params.id);
    res.status(204).end();
  });

module.exports = router;
