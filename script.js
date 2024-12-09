/**
 * Once the DOM Content is Loaded Successfully, 
 * I want to fetch the input text value 
 * and store it in localStorage, when the add todo button is clicked
 */

const loadTodos = () => {
    const todoArray = localStorage.getItem('todos');
    if (todoArray == null) {
        return '[]';
    }
    else {
        return todoArray;
    }
}


const addTodoValueToLocalStorage = (todoInputVal) => {
    if (todoInputVal == '') {
        alert("Please insert the correct statement");
    }
    else if (todoInputVal != '') {
        let todoArray = loadTodos();
        todoArray = JSON.parse(todoArray);
        todoArray.push(todoInputVal);
        const taskList = document.getElementById('taskList');
        displayTodoToHTML(todoInputVal, taskList);
        localStorage.setItem('todos', JSON.stringify(todoArray));
    }
    return;
}


const displayTodoToHTML = (todoInputVal, taskList) => {
    const eachListItem = document.createElement('li');
    eachListItem.textContent = todoInputVal;
    taskList.appendChild(eachListItem);
}


const loadingTodos = () => {
    const todoArray = loadTodos();
    const taskList = document.getElementById('taskList');
    if (todoArray != '[]') {
        const todoArrayParsed = JSON.parse(todoArray);
        todoArrayParsed.forEach((todo) => {
            displayTodoToHTML(todo, taskList);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todoInput');
    let todoInputVal = '';

    todoInput.addEventListener('change', () => {
        todoInputVal = todoInput.value.trim();
    });

    const buttonElement = document.getElementById('addTodo');
    buttonElement.addEventListener('click', () => {
        addTodoValueToLocalStorage(todoInputVal);
        todoInput.value = '';
    });
    loadingTodos();
});