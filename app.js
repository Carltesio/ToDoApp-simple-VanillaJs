document.querySelector('form').addEventListener('submit', handleSubmitForm)
document.querySelector('ul').addEventListener('click', handleClickedTask)

//Event handler
function handleSubmitForm(e) {
    e.preventDefault();
    let input = document.querySelector('input');
    if (input.value != '') {
        addTodo(input.value);
        input.value = '';
    }
}

function handleClickedTask(e) {
    if (e.target.name == 'checkButton')
    checkTodo(e);

    if(e.target.name == 'deleteButton')
    deleteTodo(e)
}

// Helpers

function addTodo(todo) {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');

    li.innerHTML = `
        <button name="checkButton"><i class="far fa-circle"></i></button>
        <span class="todo-item">${todo}</span>
        <button name="deleteButton"><i class="fas fa-times"></i></i></button><br>
        <hr>
        <a> Display options</a>
    `;

    li.classList.add('todo-list-item')
    ul.appendChild(li);
}

function checkTodo(e){
    let item = e.target.parentNode;
    if (item.style.textDecoration == 'line-through')
        item.style.textDecoration = 'none';
    else
        item.style.textDecoration = 'line-through';
}

function deleteTodo(e){
    let item = e.target.parentNode;
    item.remove();
}