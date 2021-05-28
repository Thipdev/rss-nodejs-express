const router = require('express').Router({ mergeParams: true });
const tasksService = require('./task.service');

router.route('/')
    .get(async (req, res) => {
        const tasks = await tasksService.getAll(req.params.boardId);
        res.json(tasks);
    })
    .post(async (req, res) => {
        const task = await tasksService.addTask(req.params.boardId, req.body);
        res.status(201).json(task);
    });

router.route('/:id')
    .get(async (req, res) => {
        const task = await tasksService.getById(req.params.boardId, req.params.id);
        if(!task) {
            res.status(404).json({ error: 'Task was not found.' });
            return;
        } 
      
        res.json(task);
    })
    .put(async (req, res) => {
        const task = await tasksService.updateTask(req.params.boardId, req.params.id, req.body);
        if(!task) {
            res.status(400).json({ error: 'Task was not found.' });
            return;
        }

        res.json(task);
    })
    .delete(async (req, res) => {
        const result = await tasksService.deleteTask(req.params.boardId, req.params.id);
        if(!result) {
            res.status(404).json({ error: 'Task was not found.' });
            return;
        }

        res.status(204).end();
    });

module.exports = router;