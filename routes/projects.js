// routes/projects.js
const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// Create Project
router.post('/', async (req, res) => {
    try {
        const project = new Project(req.body);
        await project.save();
        res.status(201).json(project);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get Projects
router.get('/', async (req, res) => {
    try {
        const projects = await Project.find().populate('members');
        res.status(200).json(projects);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
