// //  find the Error

// let todo = []
// let progress = []
// let done = []

// const renderDone = () => {
//   const doneList = document.getElementById('done')
//   doneList.innerHTML = `<h3>Done</h3>`
//   for (let val in done) {
//     const div = document.createElement('div')
//     div.className = "task"
//     div.innerHTML = `
//         <p> ${done[val]}</p>
//         `
//     doneList.appendChild(div)

//   }
// }

// const renderProgress = () => {
//   const Progresslist = document.getElementById('progress')
//   Progresslist.innerHTML = ` <h3>Progress</h3>`
//   for (let val in progress) {
//     const div = document.createElement('div')
//     div.className = 'task'
//     div.innerHTML = `<p> ${progress[val]}
//         <button onclick='moveToDone(${val})'> > </button>
//        `
//     Progresslist.appendChild(div)
//   }

// }

// const renderTodo = () => {
//   const todolist = document.getElementById('todo')
//   todolist.innerHTML = `<h3>Todo</h3>`
//   for (let val in todo) {
//     const div =document.createElement('div')
//     div.className = 'task'
//     div.innerHTML =`<p> ${todo[val]}</p> 
//         <button onclick='moveToProgress(${val})'> > </button>
//   `
//     todolist.appendChild(div)
//   }
// }



// const addTask = () => {
//   event.preventDefault()
//   const task = event.target[0].value
//   todo.push(task)
//   localStorage.setItem('todo', JSON.stringify(todo))
//   event.target[0].value = ''
//   console.log(todo)
//   renderTodo()
// }

// const moveToProgress = (id) => {
//   console.log("moved to progress", id)
//   progress.push(todo[id])
//   todo.splice(id, 1)
//   localStorage.setItem('todo', JSON.stringify(todo))
//   localStorage.setItem('progress', JSON.stringify(progress))
//   renderTodo()
//   renderProgress()

// }

// const moveToDone = (id) => {
//   done.push(progress[id])
//   progress.splice(id, 1)
//   renderProgress()
//   renderDone()
//   localStorage.setItem('progress', JSON.stringify(progress))
//   localStorage.setItem('done', JSON.stringify(done))
// }


// const init = () => {
//   console.log('init')
//   todo = JSON.parse(localStorage.getItem('todo'))
//   progress = JSON.parse(localStorage.getItem('progress'))
//   done = JSON.parse(localStorage.getItem('done'))
//   if (todo?.length) {
//     renderTodo()
//   }
//   if (progress?.length) {
//     renderProgress()
//   } if (done?.length) {
//     renderDone()
//   }
// }

// window.onload = () => {
//   init()
// }




let todo = []
let progress = []
let done = []

const renderList = (array, elementId, buttonName) => {
  const container = document.getElementById(elementId)
  container.innerHTML = `<h3>${elementId.charAt(0).toUpperCase() + elementId.slice(1)}</h3>`

  array.forEach((task, i) => {
    const div = document.createElement('div')
    div.className = 'task'

    let buttonHTML = ''
    if (buttonName) {
      buttonHTML = `<button onclick='${buttonName}(${i})'> > </button>`
    }

    div.innerHTML = `<p>${task}</p> ${buttonHTML}`
    container.appendChild(div)
  })
}

const addTask = (event) => {
  event.preventDefault()
  const task = event.target[0].value
  todo.push(task)
  localStorage.setItem('todo', JSON.stringify(todo))
  event.target[0].value = ''
  renderAll()
}

const moveToProgress = (id) => {
  progress.push(todo[id])
  todo.splice(id, 1)
  localStorage.setItem('todo', JSON.stringify(todo))
  localStorage.setItem('progress', JSON.stringify(progress))
  renderAll()
}

const moveToDone = (id) => {
  done.push(progress[id])
  progress.splice(id, 1)
  localStorage.setItem('progress', JSON.stringify(progress))
  localStorage.setItem('done', JSON.stringify(done))
  renderAll()
}


const renderAll = () => {
  renderList(todo, 'todo', 'moveToProgress')
  renderList(progress, 'progress', 'moveToDone')
  renderList(done, 'done', null)
}

const init = () => {
  todo = JSON.parse(localStorage.getItem('todo')) || []
  progress = JSON.parse(localStorage.getItem('progress')) || []
  done = JSON.parse(localStorage.getItem('done')) || []
  renderAll()
}

window.onload = init
document.getElementById('taskForm').addEventListener('submit', addTask)

