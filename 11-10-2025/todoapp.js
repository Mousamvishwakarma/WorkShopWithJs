//  find the Error

let todo = []
let progress = []
let done = []

const renderTodo = () => {
  const todolist = document.getElementById('todo')
  todolist.innerHTML = `<h3>Todo</h3>`
  for (let val in todo) {
    const div = createElement('div')
    div.className = 'task'
    div.innerHTML`<p> ${todo[val]}</p> 
        <button onclick='moveToProgress(${el})'> > </button>
  `
    todolist.appendChild(div)
  }
}
const renderProgress = () => {
  const Progresslist = document.getElementById('progress')
  Progresslist.innerHTML = ` <h3>Progress</h3>`
  for (let val in progress) {
    const div = createElement('div')
    div.className = 'task'
    div.innerHTML = `<p> ${progress[val]}
        <button onclick='moveToDone(${el})'> > </button>
       `
    Progresslist.appendChild(div)
  }

}
const renderDone = () => {
  const doneList = document.getElementById('done')
  doneList.innerHTML = `<h3>Done</h3>`
  for (let val in done) {
    const div = createElement(div)
    div.className = "task"
    div.innerHTML = `
        <p> ${done[el]}</p>
        `
    doneList.appendChild(div)

  }
}

const addTask = () => {
  event.preventDefault()
  const task = event.target[0].value
  todo.push(task)
  localStorage.setItem('todo', JSON.stringify(todo))
  event.target[0].value = ''
  console.log(todo)
  renderTodo()
}

const moveToProgress = (id) => {
  console.log("moved to progress", id)
  progress.push(todo[id])
  todo.splice(id, 1)
  localStorage.setItem('todo', JSON.stringify(todo))
  localStorage.setItem('progress', JSON.stringify(progress))
  renderTodo()
  renderProgress()

}

const moveToDone = (id) => {
  done.push(progress[id])
  progress.splice(id, 1)

  renderProgress()
  renderDone()
  localStorage.setItem('progress', JSON.stringify(progress))
  localStorage.setItem('done', JSON.stringify(done))
}


const init = () => {
  console.log('init')
  todo = JSON.parse(localStorage.getItem('todo'))
  progress = JSON.parse(localStorage.getItem('progress'))
  done = JSON.parse(localStorage.getItem('done'))
  if (todo?.length) {
    renderTodo()
  }
  if (progress?.length) {
    renderProgress()
  } if (done?.length) {
    renderDone()
  }
}

window.onload = () => {
  init()
}
