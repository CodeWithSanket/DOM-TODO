/**
 * Once the DOM Content is Loaded Successfully, 
 * I want to fetch the input text value 
 * and store it in localStorage, when the add todo button is clicked
 */



const addTodoValueToLocalStorage = (todoInputVal) => {

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
    });
});