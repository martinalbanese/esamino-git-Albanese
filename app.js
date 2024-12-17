const todoList = [];

/**
 * Funzione addTodo: permette dia ggiungere un todo a una categoria
 * @param title Titolo del todo
 * @param category Categoria del todo
 */
const addTodo = (title, category) => {
    const id = Date.now().toString(); 
    const newTodo = { id, title, category }; //Creazione oggetto todo

    todoList.push(newTodo); //Aggiunge il todo all'array

    renderTodos(); //Aggiorna la lista visibile
}

//Mostra la lista dei Todo
const renderTodos = () => {
    const todoListElement = document.getElementById('todo-list');
    todoListElement.innerHTML = '';

    todoList.forEach(todo => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${todo.title} (${todo.category})</span>
        `

        todoListElement.appendChild(li);
    });
};

//Aggiunge un Todo quando si clicca sul pulsante
document.getElementById('add-todo').addEventListener('click', () => {
    const title = document.getElementById('todo-title').value;
    const category = document.getElementById('todo-category').value;

    if (title) addTodo(title, category);
});
