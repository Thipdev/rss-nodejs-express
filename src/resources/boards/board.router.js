const router = require('express').Router();
const boardService = require('./board.service');

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
            res.status(404).json({ error: 'User was not found.' });
        } 

        res.json(board);
    })
    .put(async (req, res) => {
        const board = await boardService.updateBoard(req.params.id, req.body);
        if(!board) {
            res.status(400).json({ error: 'User was not found.' });
        }

        res.json(board);
    })
    .delete(async (req, res) => {
        const result = await boardService.deleteBoard(req.params.id);
        if(!result) {
            res.status(404).json({ error: 'User was not found.' });
        }

        res.status(204).end();
    });

module.exports = router;