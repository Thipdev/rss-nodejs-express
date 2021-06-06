import { Router, Request, Response, NextFunction } from 'express';
import { User } from './user.model';
import { UserService } from './user.service';
import { TaskService } from '../tasks/task.service';

const router = Router();
const service = new UserService();
const taskService = new TaskService();

router.route('/')
  .get(async (_req: Request, res: Response, next: NextFunction) => {
    const users = await service.getAll();
    // map user fields to exclude secret fields like "password"
    res.json(users.map(User.toResponse));
    next();
  })
  .post(async (req, res: Response, next: NextFunction) => {
    const user = await service.addUser(req.body);
    res.status(201).json(User.toResponse(user));
    next();
  });

router.route('/:id')
  .get(async (req: Request<{ id: string}>, res: Response, next: NextFunction) => {
    const user = await service.getById(req.params.id);
    if(!user) {
      res.status(404).json({ error: 'User was not found.' });
      next();
      return;
    } 

    res.json(User.toResponse(user));
    next();
  })
  .put(async (req: Request<{ id: string}>, res: Response, next: NextFunction) => {
    const user = await service.updateUser(req.params.id, req.body);
    if(!user) {
      res.status(400).json({ error: 'User was not found.' });
      next();
      return;
    }

    res.json(User.toResponse(user));
    next();
  })
  .delete(async (req: Request<{ id: string}>, res: Response, next: NextFunction) => {
    const result = await service.deleteUser(req.params.id);
    if(!result) {
      res.status(404).json({ error: 'User was not found.' });
      next();
      return;
    }

    await taskService.unassignedUsers(req.params.id);
    res.status(204).end();
    next();
  });

export { router };
