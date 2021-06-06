import { Router, Request, Response, NextFunction } from 'express';
import { TaskService } from './task.service';

const router = Router({ mergeParams: true });
const service = new TaskService();

router.route('/')
    .get(async (req: Request<{ boardId: string }>, res: Response, next: NextFunction) => {
        const tasks = await service.getAll(req.params.boardId);
        res.json(tasks);
        next();
    })
    .post(async (req: Request<{ boardId: string }>, res: Response, next: NextFunction) => {
        const task = await service.addTask(req.params.boardId, req.body);
        res.status(201).json(task);
        next();
    });

router.route('/:id')
    .get(async (req: Request<{ boardId: string, id: string }>, res: Response, next: NextFunction) => {
        const task = await service.getById(req.params.boardId, req.params.id);
        if(!task) {
            res.status(404).json({ error: 'Task was not found.' });
            next();
            return;
        } 
      
        res.json(task);
        next();
    })
    .put(async (req: Request<{ boardId: string, id: string }>, res: Response, next: NextFunction) => {
        const task = await service.updateTask(req.params.boardId, req.params.id, req.body);
        if(!task) {
            res.status(400).json({ error: 'Task was not found.' });
            next();
            return;
        }

        res.json(task);
        next();
    })
    .delete(async (req: Request<{ boardId: string, id: string }>, res: Response, next: NextFunction) => {
        const result = await service.deleteTask(req.params.boardId, req.params.id);
        if(!result) {
            res.status(404).json({ error: 'Task was not found.' });
            next();
            return;
        }

        res.status(204).end();
        next();
    });

export { router };