const { createElement } = require("react")


let todo = []
let progress = []
// let done = []

const rendertodo = () =>{
    const todolist = document.getElementById('todo')
todolist.innerHTML = `<h3>Todo</h3>`
for(let val in todo){
const div = createElement('div')
div.className = 'task'
div.innerHTML`<p> ${todo[val]}</p> 
        <button onclick='moveToProgress(${el})'> > </button>
  `
  todolist.appendChild(div)
}
}
  const renderProgress = ()=>{
    const Progresslist = document.getElementById('Progress')
    Progresslist.innerHTML =` <h3>Progress</h3>`
    for(let val in Progress){
      const div = createElement('div')
      div.className = 'task'
      div.innerHTML =`<p> ${Progress[val]}
        <button onclick='moveToProgress(${el})'> > </button>
       `
       Progresslist.appendChild(div)
    }
    
  }

   
  const addTask = () =>{
    rendertodo()
  }
