document.querySelector('.add-todo').addEventListener('click', ()=>{
    let newLi = document.createElement('li')
    newLi.innerText = (document.querySelector('.todo-input').value)
    document.querySelector('.todo-list').appendChild(newLi)
    document.querySelector('.todo-input').value = ''
})

document.querySelector(".todo-input").addEventListener("keydown", (event)=> {
    if (event.keyCode === 13) {
        let newLi = document.createElement('li')
        newLi.innerText = (document.querySelector('.todo-input').value)
        document.querySelector('.todo-list').appendChild(newLi)
        document.querySelector('.todo-input').value = ''
    }
});