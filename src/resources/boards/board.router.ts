import { Router, Request, Response, NextFunction } from 'express';
import { BoardService } from './board.service';
import { TaskService } from '../tasks/task.service';

const router = Router();
const service = new BoardService();
const taskService = new TaskService();

router.route('/')
    .get(async (_req: Request, res: Response, next: NextFunction) => {
        const boards = await service.getAll();
        res.json(boards);
        next();
    })
    .post(async (req: Request, res: Response, next: NextFunction) => {
        const board = await service.addBoard(req.body);
        res.status(201).json(board);
        next();
    });

router.route('/:id')
    .get(async (req: Request<{ id: string}>, res: Response, next: NextFunction) => {
        const board = await service.getById(req.params.id);
        if(!board) {
            res.status(404).json({ error: 'Board was not found.' });
            next();
            return;
        } 

        res.json(board);
        next();
    })
    .put(async (req: Request<{ id: string}>, res: Response, next: NextFunction) => {
        const board = await service.updateBoard(req.params.id, req.body);
        if(!board) {
            res.status(400).json({ error: 'Board was not found.' });
            next();
            return;
        }

        res.json(board);
        next();
    })
    .delete(async (req: Request<{ id: string}>, res: Response, next: NextFunction) => {
        const result = await service.deleteBoard(req.params.id);
        if(!result) {
            res.status(404).json({ error: 'Board was not found.' });
            next();
            return;
        }

        await taskService.deleteByBoard(req.params.id);
        next();
        res.status(204).end();
    });

export { router };
