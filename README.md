# Todo App

Una semplice applicazione Todo che permette agli utenti di aggiungere, modificare, eliminare e visualizzare Todo. Include anche funzionalità di filtro e la persistenza dei dati tramite `localStorage`.

---

## **Installazione e Avvio del Progetto**

### **Prerequisiti**

- **Node.js** e **npm** devono essere installati sul tuo sistema. Puoi verificare se sono installati con i seguenti comandi:

  ```bash
  node -v
  npm -v

### **Passaggi per installare e avviare il progetto**

1. Clonare il repository: Se non l'hai già fatto, clona il repository sul tuo sistema locale:

 `git clone https://github.com/tuo-username/todo-app.git`

2. Installare le dipendenze: Vai nella cartella del progetto e installa le dipendenze necessarie:

`cd todo-app`
`npm install`

3. Avviare il progetto: Una volta installate le dipendenze, avvia il progetto:

 `npm start`

## **Funzionalità implementate**

1. Aggiunta Todo: 
Gli utenti possono aggiungere nuovi Todo con un titolo e una categoria. Il Todo verrà salvato nel localStorage per persistenza.

2. Eliminazione Todo: 
Gli utenti possono eliminare un Todo dalla lista.

3. Completamento Todo: 
Gli utenti possono segnare un Todo come completato o non completato. I Todo completati vengono visualizzati con un'icona di spunta (✔️).

4. Modifica Todo: 
Gli utenti possono modificare il titolo e la categoria di un Todo esistente tramite un prompt.

5. Filtraggio Todo: 
Gli utenti possono filtrare i Todo per stato (completati, non completati, tutti) e categoria.

6. Persistenza dei Dati: 
I Todo vengono salvati nel localStorage, quindi anche se l'utente ricarica la pagina o chiude il browser, i Todo rimangono.

## **Principali Operazioni Git Utilizzate**

### Creazione e gestione delle branch
- Creazione di una branch: Quando inizia una nuova funzionalità o bug-fix, creiamo una nuova branch:

`git checkout -b nome-branch`

- Switch tra branch: Per passare tra le branch, usiamo il comando:

`git checkout nome-branch`

### Salvataggio delle modifiche con git stash
- Quando lavoriamo su una funzionalità e dobbiamo risolvere un bug urgente, possiamo usare git stash per salvare temporaneamente le modifiche in corso:

`git stash -m "Messaggio descrittivo del lavoro in corso"`

- Per riprendere a modificare le ultime modifiche inserite nello stash usiamo:

`git stash pop`

### Creazione di commit
Un commit registra le modifiche apportate al progetto:

`git add .`
`git commit -m "Descrizione del cambiamento"`

### Unione delle modifiche con git merge
- Quando una funzionalità o bug-fix è completato, uniamo le modifiche alla branch principale (main) usando il comando merge:

`git checkout main`
`git merge nome-branch`

- Per fare un merge univoco di moltiplici commit usiamo:

`git merge --squash nome_branch`

### Risoluzione dei conflitti di merge
Quando due branch modificano la stessa parte di codice, può verificarsi un conflitto durante il merge. 

`git add .`
`git commit -m "fix: risolto conflitto tra nome-branch1 e nome-branch2"`

### Rebase interattivo per mantenere una cronologia pulita
Per mantenere una cronologia pulita si può usare un rebase interattivo per combinare o modificare le commit precedenti.

`git rebase -i id_commit`

### Correzione commit precedenti
Per modificare un commit precedente mantenendo il messaggio di commit.

`git commit --fixup id_commit`

### Annullare un commit specifico
Per annullare un commit specifico e creare un nuovo commit che inverte le modifiche di un commit precedente si usa:

`git revert HEAD`

### Push delle modifiche su GitHub
Una volta che le modifiche sono state completate e unite, vengono inviate al repository remoto su GitHub con:

`git push origin nome_branch`


# Versioning
## v0.1.4 - Funzionalità temporanea
Modificato ordine versioning in README.md
Quindicesimo commit: "feat: completata funzionalità temporanea"

## v0.1.3 - Correzione bug urgente
Corretto un bug urgente che impediva il funzionamento della logica tramite una funzione di controllo
Quattordicesimo commit: "hotfix: corretta funzionalità urgente" 

## v0.1.2 - Ripristino codice senza bug
Ripristinata funzione essenziale
Tredicesimo commit: "revert: ripristinata funzione essenziale"

## v0.1.1 - Introduzione bug
Introdotto un bug nella funzione addTodo: ora i Todo vengono salvati senza categoria
Dodicesimo commit: "feat: aggiunta buggy-feature"

## v0.1.0 - Risoluzione conflitti
- Risolto un conflitto tra le funzionalità `edit-todos` (modifica del titolo e categoria) e `completed-count` (visualizzazione dei Todo completati/non completati).
- Combinate entrambe le funzionalità nella funzione `renderTodos` per garantire che entrambe possano coesistere correttamente.
Undicesimo commit: "fix: risolto conflitto tra branch edit-todos e completed-count"

## v0.0.9 - Aggiunta funzione countCompletedTodos
Implementata funzione per visualizzare il numero di Todo completati
Decimo commit: "feat: aggiunta funzione countCompletedTodos"

## v0.0.8 - Aggiunta funzione editTodo
Implementata funzione per modificare i Todo
Nono commit: "feat: aggiunta funzione editTodo"

## v0.0.7 - Corretta gestione di categorie
Corretto il trattamento delle categorie dei Todo nel localStorage
Ottavo commit: "fix: corretta gestione di categorie in localStorage"

## v0.0.6 - Memorizzazione locale
Aggiunta la persistenza dei Todo usando il localStorage:
- i Todo vengono caricati automaticamente al caricamento della pagina;
- quando vengono aggiunti, eliminati o aggiornati i Todo, la lista viene salvata
Settimo commit: "feat: persistenza Todo con localStorage"

## v0.0.5 - Miglioramento del layout
Migliorato il layout per l'interfaccia
Sesto commit: "feat: migliorato layout della pagina"

## v0.0.4 - Aggiunta funzionalità di filtro
Aggiunte le seguenti funzionalità:
- Filtri per visualizzare i Todo in base:
    - allo stato (Tutti, Completati, Non completati) 
    - alla categoria (Tutte, Personale, Lavoro, Altro);
Quinto commit: "feat: aggiunta funzionalità di filtro"

## v0.0.3 - Aggiunta funzione toggleComplete
Implementata la funzione toggleComplete per alterare lo stato di completamento dei Todo
Quarto commit: "feat: aggiunta funzione toggleComplete"

## v0.0.2 - Aggiunta funzione deleteTodo
- Implementata la funzione deleteTodo per rimuovere i Todo esistenti.
- Aggiunto il pulsante "Elimina accanto a ogni Todo nell'interfaccia
Terzo commit: "feat: aggiunta funzione deleteTodo"

## v0.0.1 - Aggiunta funzione addTodo
- Implementata la funzione addTodo per consentire agli utenti di aggiungere Todo con titolo e categoria
- Ogni Todo è salvato in un array todoList con le seguenti proprietà:
   - id: identificativo univoco generato automaticamente
   - title: titolo del Todo
   - category: categoria selezionata dall'utente
Secondo commit: "feat: aggiunta funzione addTodo"

## v0.0.0 - Configurazione iniziale
Configurata la repository con i seguenti file:
 - index.html: Layout della Todo App
 - app.js: Logica JavaScript
 - style.css: Stile della pagina
Primo commit: "chore: configurazione iniziale della repository"
