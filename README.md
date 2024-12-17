# Todo App

## v0.0.0 - Configurazione iniziale
### Configurata la repository con i seguenti file:
### - index.html: Layout della Todo App
### - app.js: Logica JavaScript
### - style.css: Stile della pagina
### Primo commit: "chore: configurazione iniziale della repository"

## v0.0.1 - Aggiunta funzione addTodo
### Implementata la funzione addTodo per consentire agli utenti di aggiungere Todo con titolo e categoria
### Ogni Todo è salvato in un array todoList con le seguenti proprietà:
### - id: identificativo univoco generato automaticamente
### - title: titolo del Todo
### - category: categoria selezionata dall'utente
### Secondo commit: "feat: aggiunta funzione addTodo"

## v0.0.2 - Aggiunta funzione deleteTodo
### - Implementata la funzione deleteTodo per rimuovere i Todo esistenti.
### - Aggiunto il pulsante "Elimina accanto a ogni Todo nell'interfaccia
### Terzo commit: "feat: aggiunta funzione deleteTodo"

## v0.0.3 - Aggiunta funzione toggleComplete
### - Implementata la funzione toggleComplete per alterare lo stato di completamento dei Todo
### Quarto commit: "feat: aggiunta funzione toggleComplete"

## v0.0.4 - Aggiunta funzionalità di filtro
### Aggiunte le seguenti funzionalità:
### - Filtri per visualizzare i Todo in base:
###     - allo stato (Tutti, Completati, Non completati) 
###     - alla categoria (Tutte, Personale, Lavoro, Altro);
### Quinto commit: "feat: aggiunta funzionalità di filtro"

## v0.0.5 - Miglioramento del layout
### Migliorato il layout per l'interfaccia
### Sesto commit: "feat: migliorato layout della pagina"

## v0.0.6 - Memorizzazione locale
### Aggiunta la persistenza dei Todo usando il localStorage:
### - i Todo vengono caricati automaticamente al caricamento della pagina;
### - quando vengono aggiunti, eliminati o aggiornati i Todo, la lista viene salvata
### Settimo commit: "feat: persistenza Todo con localStorage"

## v0.0.7 - Corretta gestione di categorie
### Corretto il trattamento delle categorie dei Todo nel localStorage
### Ottavo commit: "fix: corretta gestione di categorie in localStorage"

## v0.0.8 - Aggiunta funzione editTodo
### Implementata funzione per modificare i Todo
### Nono commit: "feat: aggiunta funzione editTodo"

## v0.0.9 - Aggiunta funzione countCompletedTodos
### Implementata funzione per visualizzare il numero di Todo completati
### Decimo commit: "feat: aggiunta funzione countCompletedTodos"

## v0.1.0
### Risolto un conflitto tra le funzionalità `edit-todos` (modifica del titolo e categoria) e `completed-count` (visualizzazione dei Todo completati/non completati).
### Combinate entrambe le funzionalità nella funzione `renderTodos` per garantire che entrambe possano coesistere correttamente.
### Undicesimo commit: "fix: risolto conflitto tra branch edit-todos e completed-count"

## v0.1.1
### Introdotto un bug nella funzione addTodo: ora i Todo vengono salvati senza categoria
### Dodicesimo commit: "feat: aggiunta buggy-feature"

## v0.1.2
### Ripristinata funzione essenziale
### commit: "revert: ripristinata funzione essenziale"

