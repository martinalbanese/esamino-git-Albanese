const todoList = [];

/**
 * Funzione addTodo: permette di aggiungere un todo a una categoria
 * @param title Titolo del todo
 * @param category Categoria del todo
 */
const addTodo = (title, category) => {
    const id = Date.now().toString();
    const newTodo = { id, title, category, completed: false }; //Creazione oggetto todo

    todoList.push(newTodo); //Aggiunge il todo all'array

    renderTodos(); //Aggiorna la lista visibile
}

/**
 * Funzione deleteTodo: permette di eliminare un todo presente nell'array todoList
 * @param id Id del Todo da eliminare
 */
const deleteTodo = (id) => {
    const index = todoList.findIndex(todo => todo.id === id); //Trova l'indice del Todo da eliminare

    if (index !== -1) {
        todoList.splice(index, 1); //Rimuove il Todo dall'array
    }

    renderTodos(); //Aggiorna la lista visibile
}

/**
 * Funzione toggleComplete: permette di segnare un Todo come completato
 * @param id Id del Todo per segnare come completato il todo
 */
const toggleComplete = (id) => {
    const todo = todoList.find(todo => todo.id === id); //Trova il Todo nell'array

    if (todo) todo.completed = !todo.completed; //Cambia lo stato "completed"

    renderTodos();
}

//Mostra la lista dei Todo, con pulsante "Completato" ed "Elimina"
const renderTodos = () => {
    const todoListElement = document.getElementById('todo-list');
    todoListElement.innerHTML = '';

    todoList.forEach(todo => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${todo.title} (${todo.category}) ${todo.completed ? '✔️' : ''}</span>
            <button onclick="toggleComplete('${todo.id}')">Completato</button>
            <button onclick="deleteTodo('${todo.id}')">Elimina</button>
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


