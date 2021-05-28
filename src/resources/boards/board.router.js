const router = require('express').Router();
const boardService = require('./board.service');
const tasksService = require('../tasks/task.service');

router.route('/')
    .get(async (req, res) => {
        const boards = await boardService.getAll();
        res.json(boards);
    })
    .post(async (req, res) => {
        const board = await boardService.addBoard(req.body);
        res.status(201).json(board);
    });

router.route('/:id')
    .get(async (req, res) => {
        const board = await boardService.getById(req.params.id);
        if(!board) {
            res.status(404).json({ error: 'Board was not found.' });
            return;
        } 

        res.json(board);
    })
    .put(async (req, res) => {
        const board = await boardService.updateBoard(req.params.id, req.body);
        if(!board) {
            res.status(400).json({ error: 'Board was not found.' });
            return;
        }

        res.json(board);
    })
    .delete(async (req, res) => {
        const result = await boardService.deleteBoard(req.params.id);
        if(!result) {
            res.status(404).json({ error: 'Board was not found.' });
            return;
        }

        await tasksService.deleteByBoard(req.params.id);
        res.status(204).end();
    });

module.exports = router;