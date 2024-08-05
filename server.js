const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

// Import routes
const projectRoutes = require('./routes/projects');
const taskRoutes = require('./routes/tasks');
const authRoutes = require('./routes/auth');
const commentRoutes = require('./routes/comments');

const app = express();

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/project_management', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Import models
const Project = require('./models/Project');
const Task = require('./models/Task');
const Comment = require('./models/Comment');

// Routes
app.use('/projects', projectRoutes);
app.use('/tasks', taskRoutes);
app.use('/auth', authRoutes);
app.use('/comments', commentRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});



















// const express = require('express');
// const mongoose = require('mongoose');
// const path = require('path');

// // Import routes
// const projectRoutes = require('./routes/projects');
// const taskRoutes = require('./routes/tasks');
// const authRoutes = require('./routes/auth');
// const commentRoutes = require('./routes/comments');

// const app = express();

// // Middleware
// app.use(express.json()); // Built-in middleware to parse JSON
// app.use(express.static(path.join(__dirname, 'public'))); // Serve static files

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/project_management', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(() => console.log('MongoDB connected'))
// .catch(err => console.error('MongoDB connection error:', err));

// // Define Schemas
// const projectSchema = new mongoose.Schema({
//     name: { type: String, required: true }
// });

// const taskSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true }
// });

// const commentSchema = new mongoose.Schema({
//     text: { type: String, required: true },
//     taskId: { type: mongoose.Schema.Types.ObjectId, ref: 'Task', required: true }
// });

// // Create Models
// const Project = mongoose.model('Project', projectSchema);
// const Task = mongoose.model('Task', taskSchema);
// const Comment = mongoose.model('Comment', commentSchema);

// // Routes
// app.use('/projects', projectRoutes);
// app.use('/tasks', taskRoutes);
// app.use('/auth', authRoutes);
// app.use('/comments', commentRoutes);

// // Define additional routes if needed
// app.post('/projects', async (req, res) => {
//     try {
//         const project = new Project(req.body);
//         await project.save();
//         res.status(201).json(project);
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// });

// app.get('/projects', async (req, res) => {
//     try {
//         const projects = await Project.find();
//         res.json(projects);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// app.post('/tasks', async (req, res) => {
//     try {
//         const task = new Task(req.body);
//         await task.save();
//         res.status(201).json(task);
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// });

// app.get('/tasks', async (req, res) => {
//     try {
//         const tasks = await Task.find().populate('projectId');
//         res.json(tasks);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// // Start server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });
