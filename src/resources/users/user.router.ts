import * as express from 'express';
import { User } from './user.model';
import { UserService } from './user.service';
//const taskServise = require('../tasks/task.service');

const router = express.Router();
const service = new UserService();

router.route('/')
  .get(async (_req, res) => {
    const users = await service.getAll();
    // map user fields to exclude secret fields like "password"
    res.json(users.map(User.toResponse));
  })
  .post(async (req, res) => {
    const user = await service.addUser(req.body);
    res.status(201).json(User.toResponse(user));
  });

router.route('/:id')
  .get(async (req, res) => {
    const user = await service.getById(req.params.id);
    if(!user) {
      res.status(404).json({ error: 'User was not found.' });
      return;
    } 

    res.json(User.toResponse(user));
  })
  .put(async (req, res) => {
    const user = await service.updateUser(req.params.id, req.body);
    if(!user) {
      res.status(400).json({ error: 'User was not found.' });
      return;
    }

    res.json(User.toResponse(user));
  })
  .delete(async (req, res) => {
    const result = await service.deleteUser(req.params.id);
    if(!result) {
      res.status(404).json({ error: 'User was not found.' });
      return;
    }

    //await taskServise.unassignedUsers(req.params.id);
    res.status(204).end();
  });

export { router };
