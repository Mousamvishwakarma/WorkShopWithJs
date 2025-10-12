let todo = [];
let inProgress = [];
let done = [];

// RENDER FUNCTIONS
const renderTodo = () => {
    const todoList = document.getElementById('todo');
    todoList.innerHTML = `<h3>Todo</h3>`;
    todo.forEach((task, i) => {
        const div = document.createElement('div');
        div.className = "task";
        div.innerHTML = `
            <p>${task}</p>
            <button onclick='moveToProgress(${i})'>➡️</button>
        `;
        todoList.appendChild(div);
    });
};

const renderProgress = () => {
    const progressList = document.getElementById('progress');
    progressList.innerHTML = `<h3>In Progress</h3>`;
    inProgress.forEach((task, i) => {
        const div = document.createElement('div');
        div.className = "task";
        div.innerHTML = `
            <p>${task}</p>
            <button onclick='moveToDone(${i})'>✅</button>
        `;
        progressList.appendChild(div);
    });
};

const renderDone = () => {
    const doneList = document.getElementById('done');
    doneList.innerHTML = `<h3>Done</h3>`;
    done.forEach(task => {
        const div = document.createElement('div');
        div.className = "task";
        div.innerHTML = `<p>${task}</p>`;
        doneList.appendChild(div);
    });
};

// ADD TASK
const addTask = (event) => {
    event.preventDefault();
    const task = event.target[0].value.trim();
    if (!task) return;

    todo.push(task);
    event.target[0].value = "";
    localStorage.setItem('todo', JSON.stringify(todo));
    renderTodo();
};

// MOVE TASKS
const moveToProgress = (id) => {
    inProgress.push(todo[id]);
    todo.splice(id, 1);
    updateLocalStorage();
    renderTodo();
    renderProgress();
};

const moveToDone = (id) => {
    done.push(inProgress[id]);
    inProgress.splice(id, 1);
    updateLocalStorage();
    renderProgress();
    renderDone();
};

// LOCAL STORAGE HANDLING
const updateLocalStorage = () => {
    localStorage.setItem('todo', JSON.stringify(todo));
    localStorage.setItem('progress', JSON.stringify(inProgress));
    localStorage.setItem('done', JSON.stringify(done));
};

// INITIALIZE APP
const init = () => {
    todo = JSON.parse(localStorage.getItem('todo')) || [];
    inProgress = JSON.parse(localStorage.getItem('progress')) || [];
    done = JSON.parse(localStorage.getItem('done')) || [];

    renderTodo();
    renderProgress();
    renderDone();
};

window.onload = init;
