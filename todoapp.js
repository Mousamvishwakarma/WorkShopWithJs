let todo = []
let inProgress = []
let done = []




const renderDone = () => {
    const doneList = document.getElementById('done')
     doneList.innerHTML=`<h3>Done</h3>`   
    for(let el in done){
        
        const div = document.createElement('div')
        div.className="task"
        div.innerHTML= `
        <p> ${done[el]}</p>
        `
        doneList.appendChild(div)
    }

}

const renderProgress = () => {
    const progressList = document.getElementById('progress')
     progressList.innerHTML=`<h3>In Progress</h3>`   
    for(let el in inProgress){
        const div = document.createElement('div')
        div.className="task"
        div.innerHTML= `
        <p> ${inProgress[el]}</p>
        <button onclick='moveToDone(${el})'> > </button>
        `
        progressList.appendChild(div)
    }

}



const renderTodo = () => {
    const todoList = document.getElementById('todo')
     todoList.innerHTML=`<h3>Todo</h3>`   
    for(let el in todo){
        const div = document.createElement('div')
        div.className="task"
        div.innerHTML= `
        <p> ${todo[el]}</p>
        <button onclick='moveToProgress(${el})'> > </button>
        `
        todoList.appendChild(div)
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
    inProgress.push(todo[id])
    todo.splice(id,1)
    localStorage.setItem('todo', JSON.stringify(todo))
    localStorage.setItem('progress', JSON.stringify(inProgress))
    renderTodo()
    renderProgress()
    
} 

const moveToDone = (id) => {
    done.push(inProgress[id])
    inProgress.splice(id,1)
    
    renderProgress()
    renderDone()
    localStorage.setItem('progress', JSON.stringify(inProgress))
    localStorage.setItem('done', JSON.stringify(done))
}


const init = () => {
    console.log('init')
    todo = JSON.parse(localStorage.getItem('todo'))
    inProgress = JSON.parse(localStorage.getItem('progress'))
    done = JSON.parse(localStorage.getItem('done'))
    if(todo?.length){
        renderTodo()
    }
    if(inProgress?.length){
        renderProgress()
    }if(done?.length){
        renderDone()
    }
}

window.onload = () =>{
    init()
}
