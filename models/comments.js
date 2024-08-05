const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');

// Add Comment
router.post('/', async (req, res) => {
    try {
        const comment = new Comment(req.body);
        await comment.save();
        res.status(201).json(comment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get Comments
router.get('/', async (req, res) => {
    try {
        const comments = await Comment.find().populate('taskId userId');
        res.status(200).json(comments);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
