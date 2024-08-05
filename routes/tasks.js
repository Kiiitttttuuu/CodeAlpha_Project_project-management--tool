// routes/tasks.js
const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// Create Task
router.post('/', async (req, res) => {
    try {
        const task = new Task(req.body);
        await task.save();
        res.status(201).json(task);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get Tasks
router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find().populate('projectId assignedTo');
        res.status(200).json(tasks);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
