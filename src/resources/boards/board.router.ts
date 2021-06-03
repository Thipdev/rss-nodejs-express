import { Router, Request, Response } from 'express';
import { BoardService } from './board.service';
import { TaskService } from '../tasks/task.service';

const router = Router();
const service = new BoardService();
const taskService = new TaskService();

router.route('/')
    .get(async (_req: Request, res: Response) => {
        const boards = await service.getAll();
        res.json(boards);
    })
    .post(async (req, res) => {
        const board = await service.addBoard(req.body);
        res.status(201).json(board);
    });

router.route('/:id')
    .get(async (req: Request<{ id: string}>, res: Response) => {
        const board = await service.getById(req.params.id);
        if(!board) {
            res.status(404).json({ error: 'Board was not found.' });
            return;
        } 

        res.json(board);
    })
    .put(async (req: Request<{ id: string}>, res: Response) => {
        const board = await service.updateBoard(req.params.id, req.body);
        if(!board) {
            res.status(400).json({ error: 'Board was not found.' });
            return;
        }

        res.json(board);
    })
    .delete(async (req: Request<{ id: string}>, res: Response) => {
        const result = await service.deleteBoard(req.params.id);
        if(!result) {
            res.status(404).json({ error: 'Board was not found.' });
            return;
        }

        await taskService.deleteByBoard(req.params.id);
        res.status(204).end();
    });

export { router };
