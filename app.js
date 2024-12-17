let todoList = [];

//Variabili per il tracciamento dei filtri correnti
let filterStatus = 'all';
let filterCategory = 'all'

/**
 * Funzione loadTodos: permette di caricare i Todo dal localStorage
 */
const loadTodos = () => {
    const storedTodos = localStorage.getItem('todos');
    
    if(storedTodos) {
        todoList = JSON.parse(storedTodos);

        //Corregge le categorie, se necessario
        todoList.forEach(todo => {
            if(!['personale', 'lavoro', 'altro'].includes(todo.category)) {
                todo.category = 'altro' //Imposta la categoria predefinita se non valida
            }
        })
    }

    renderTodos();
}

/**
 * Funzione SaveTodos: permette di salvare i Todo nel localStorage
 */
const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todoList));
}

/**
 * Funzione addTodo: permette di aggiungere un todo a una categoria
 * @param title Titolo del todo
 * @param category Categoria del todo
 */
const addTodo = (title, category) => {
    const id = Date.now().toString();
    const newTodo = { id, title, category, completed: false }; //Creazione oggetto todo

    todoList.push(newTodo); //Aggiunge il todo all'array

    saveTodos(); //Salva nel localStorage

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
        saveTodos(); // Salva nel localStorage
    }

    renderTodos(); //Aggiorna la lista visibile
}

/**
 * Funzione toggleComplete: permette di segnare un Todo come completato
 * @param id Id del Todo per segnare come completato il todo
 */
const toggleComplete = (id) => {
    const todo = todoList.find(todo => todo.id === id); //Trova il Todo nell'array

    if (todo) {
        todo.completed = !todo.completed; //Cambia lo stato "completed"
        saveTodos(); // Salva nel localStorage
    }

    renderTodos();
}

/**
 * Funzione applyFilters: permette di applicare i filtri e aggiornare la lista visibile
 */
const applyFilters = () => {
    const filteredTodos = todoList.filter(todo => {
        const statusMatch =
            filterStatus === 'all' ||
            (filterStatus === 'completed' && todo.completed) ||
            (filterStatus === 'not-completed' && !todo.completed);

        const categoryMatch =
            filterCategory === 'all' || todo.category === filterCategory;

        return statusMatch && categoryMatch;
    })

    renderTodos(filteredTodos);
}

// Funzione per calcolare il numero di Todo completati e non completati
const countCompletedTodos = () => {
    const completed = todoList.filter(todo => todo.completed).length;
    const notCompleted = todoList.length - completed;
    document.getElementById('completed-count').innerText = `Completati: ${completed}, Non completati: ${notCompleted}`;
  };

//Mostra la lista dei Todo, con pulsante "Completato" ed "Elimina"
const renderTodos = (todos = todoList) => {
    const todoListElement = document.getElementById('todo-list');
    todoListElement.innerHTML = '';

    todos.forEach(todo => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${todo.title} (${todo.category}) ${todo.completed ? '✔️' : ''}</span>
            <button onclick="toggleComplete('${todo.id}')">Completato</button>
            <button onclick="deleteTodo('${todo.id}')">Elimina</button>
        `

        todoListElement.appendChild(li);
    });

    countCompletedTodos();  // Visualizza il conteggio dei Todo completati/non completati
};

//Carica i Todo quando la pagina viene caricata
document.addEventListener('DOMContentLoaded', loadTodos); // Carica i Todo all'avvio

//Aggiunge un Todo quando si clicca sul pulsante
document.getElementById('add-todo').addEventListener('click', () => {
    const title = document.getElementById('todo-title').value;
    const category = document.getElementById('todo-category').value;

    if (title) addTodo(title, category);
});

// Aggiorna i filtri quando l'utente li applica
document.getElementById('apply-filters').addEventListener('click', () => {
    filterStatus = document.getElementById('filter-status').value;
    filterCategory = document.getElementById('filter-category').value;
    applyFilters();
});




