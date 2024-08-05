document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');
    const projectForm = document.getElementById('projectForm');
    const taskForm = document.getElementById('taskForm');
    const commentForm = document.getElementById('commentForm');
    const projectsList = document.getElementById('projectsList');
    const tasksList = document.getElementById('tasksList');
    const commentsList = document.getElementById('commentsList');
    const projectSelect = document.getElementById('projectSelect');
    const taskSelect = document.getElementById('taskSelect');

    // User Registration
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(registerForm);
        const data = Object.fromEntries(formData);

        fetch('/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => alert('Registration successful'))
        .catch(error => console.error('Error:', error));
    });

    // User Login
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(loginForm);
        const data = Object.fromEntries(formData);

        fetch('/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => alert('Login successful'))
        .catch(error => console.error('Error:', error));
    });

    // Create Project
    projectForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(projectForm);
        const data = Object.fromEntries(formData);

        fetch('/projects', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            updateProjectsList();
            updateProjectSelect();
        })
        .catch(error => console.error('Error:', error));
    });

    // Create Task
    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(taskForm);
        const data = Object.fromEntries(formData);

        fetch('/tasks', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            updateTasksList();
            updateTaskSelect();
        })
        .catch(error => console.error('Error:', error));
    });

    // Add Comment
    commentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(commentForm);
        const data = Object.fromEntries(formData);

        fetch('/comments', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => updateCommentsList())
        .catch(error => console.error('Error:', error));
    });

    function updateProjectsList() {
        fetch('/projects')
            .then(response => response.json())
            .then(projects => {
                projectsList.innerHTML = '';
                projects.forEach(project => {
                    const div = document.createElement('div');
                    div.textContent = `Project: ${project.name}`;
                    projectsList.appendChild(div);
                });
            });
    }

    function updateTasksList() {
        fetch('/tasks')
            .then(response => response.json())
            .then(tasks => {
                tasksList.innerHTML = '';
                tasks.forEach(task => {
                    const div = document.createElement('div');
                    div.textContent = `Task: ${task.name} (Project ID: ${task.projectId})`;
                    tasksList.appendChild(div);
                });
            });
    }

    function updateCommentsList() {
        fetch('/comments')
            .then(response => response.json())
            .then(comments => {
                commentsList.innerHTML = '';
                comments.forEach(comment => {
                    const div = document.createElement('div');
                    div.textContent = `Comment: ${comment.content} (Task ID: ${comment.taskId}, User ID: ${comment.userId})`;
                    commentsList.appendChild(div);
                });
            });
    }

    function updateProjectSelect() {
        fetch('/projects')
            .then(response => response.json())
            .then(projects => {
                projectSelect.innerHTML = '';
                projects.forEach(project => {
                    const option = document.createElement('option');
                    option.value = project._id;
                    option.textContent = project.name;
                    projectSelect.appendChild(option);
                });
            });
    }

    function updateTaskSelect() {
        fetch('/tasks')
            .then(response => response.json())
            .then(tasks => {
                taskSelect.innerHTML = '';
                tasks.forEach(task => {
                    const option = document.createElement('option');
                    option.value = task._id;
                    option.textContent = task.name;
                    taskSelect.appendChild(option);
                });
            });
    }

    // Initial load of data
    updateProjectsList();
    updateTasksList();
    updateCommentsList();
    updateProjectSelect();
    updateTaskSelect();
});





































// document.addEventListener('DOMContentLoaded', () => {
//     const projectForm = document.getElementById('projectForm');
//     const taskForm = document.getElementById('taskForm');
//     const projectsList = document.getElementById('projectsList');
//     const tasksList = document.getElementById('tasksList');
//     const projectSelect = document.getElementById('projectSelect');

//     projectForm.addEventListener('submit', (e) => {
//         e.preventDefault();
//         const projectName = document.getElementById('projectName').value;

//         fetch('/projects', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ name: projectName })
//         })
//         .then(response => response.json())
//         .then(data => {
//             updateProjectList();
//             updateProjectSelect();
//         });
//     });

//     taskForm.addEventListener('submit', (e) => {
//         e.preventDefault();
//         const taskName = document.getElementById('taskName').value;
//         const projectId = document.getElementById('projectSelect').value;

//         fetch('/tasks', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ name: taskName, projectId })
//         })
//         .then(response => response.json())
//         .then(data => {
//             updateTaskList();
//         });
//     });

//     function updateProjectList() {
//         fetch('/projects')
//             .then(response => response.json())
//             .then(projects => {
//                 projectsList.innerHTML = '';
//                 projects.forEach(project => {
//                     const div = document.createElement('div');
//                     div.textContent = `Project: ${project.name}`;
//                     projectsList.appendChild(div);
//                 });
//             });
//     }

//     function updateTaskList() {
//         fetch('/tasks')
//             .then(response => response.json())
//             .then(tasks => {
//                 tasksList.innerHTML = '';
//                 tasks.forEach(task => {
//                     const div = document.createElement('div');
//                     div.textContent = `Task: ${task.name} (Project ID: ${task.projectId})`;
//                     tasksList.appendChild(div);
//                 });
//             });
//     }

//     function updateProjectSelect() {
//         fetch('/projects')
//             .then(response => response.json())
//             .then(projects => {
//                 projectSelect.innerHTML = '';
//                 projects.forEach(project => {
//                     const option = document.createElement('option');
//                     option.value = project._id;
//                     option.textContent = project.name;
//                     projectSelect.appendChild(option);
//                 });
//             });
//     }

//     updateProjectList();
//     updateTaskList();
//     updateProjectSelect();
// });
