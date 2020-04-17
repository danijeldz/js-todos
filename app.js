const addForm = document.querySelector(".add")
const list = document.querySelector(".list-group")

const addNewTodo = (todo) => {
  const newTodo = `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>`
  list.innerHTML += newTodo
}

addForm.addEventListener("submit", (e) => {
  e.preventDefault()
  const warning = addForm.querySelector(".warning")
  const todo = addForm.add.value.trim()
  if (todo.length) {
    addNewTodo(todo)
    addForm.reset()
    warning.textContent = ""
  } else {
    warning.textContent = "You need to enter some text to add new todo"
  }
})

// delete todo

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove()
  }
})
