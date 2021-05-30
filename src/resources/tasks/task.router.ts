import * as express from 'express';
import { TaskService } from './task.service';

const router = express.Router({ mergeParams: true });
const service = new TaskService();

router.route('/')
    .get(async (req: any, res) => {
        const tasks = await service.getAll(req.params.boardId);
        res.json(tasks);
    })
    .post(async (req: any, res) => {
        const task = await service.addTask(req.params.boardId, req.body);
        res.status(201).json(task);
    });

router.route('/:id')
    .get(async (req: any, res) => {
        const task = await service.getById(req.params.boardId, req.params.id);
        if(!task) {
            res.status(404).json({ error: 'Task was not found.' });
            return;
        } 
      
        res.json(task);
    })
    .put(async (req: any, res) => {
        const task = await service.updateTask(req.params.boardId, req.params.id, req.body);
        if(!task) {
            res.status(400).json({ error: 'Task was not found.' });
            return;
        }

        res.json(task);
    })
    .delete(async (req: any, res) => {
        const result = await service.deleteTask(req.params.boardId, req.params.id);
        if(!result) {
            res.status(404).json({ error: 'Task was not found.' });
            return;
        }

        res.status(204).end();
    });

export { router };