const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

const suggestionsList = document.getElementById('suggestions-list');
const refreshButton = document.getElementById('refresh');


let todos = []; //array for todos

let suggestions = []; //array for suggestions
  
function refreshSuggestions() {
    suggestions = [];
    renderSuggestionsList();//resets the list for new suggestions to be added

    for(let i = 0; i < 5; i++) //Adds 5 suggestions to the array
    {
      fetch('https://www.boredapi.com/api/activity/') //fetches a random suggestion from the boredapi
      .then(response => response.json())
      .then(data => {
        suggestions.push(data.activity); //pushes to the array
        renderSuggestionsList(); //renders the list
      })
      .catch(error => { //error handling
        console.error('Error fetching suggestion:', error);
      });
    }
    console.log(suggestions); //testing
}

refreshSuggestions();
refreshButton.addEventListener('click', refreshSuggestions); //sets up refresh button

form.addEventListener('submit', e => {
  e.preventDefault(); //prevents the page from refreshing
  const todoText = input.value.trim();
  if (todoText !== '') { //checks if the input is empty
    addTodoToList(todoText); //adds the todo to the list
    input.value = ''; //resets the input
    input.focus(); //focuses on the input
  }
});

function addTodoToList(todoText) {
  todoText.trim(); //removes whitespace
  todoText = todoText.charAt(0).toUpperCase() + todoText.slice(1); //Set the first letter to be uppercase to be consitent
  const todo = { text: todoText, done: false };
  todos.push(todo); //pushes the todo to the array
  renderTodoList();
}

input.addEventListener('keyup', (event) => {
    // Check if the enter key was pressed
    if (event.key === 'Enter') {
      addTodo();
    }
});

function deleteTodoFromList(index) {
  todos.splice(index, 1); //deletes the todo from the array
  renderTodoList();
}

function deleteSuggestion(index) {
  suggestions.splice(index, 1); //deletes the suggestion from the array
  renderSuggestionsList();
}

function toggleTodoDone(index) {
  todos[index].done = !todos[index].done; //toggles the done value of the todo
  renderTodoList();
}

function togglePriority(index) {
  todos[index].priority = !todos[index].priority; //toggles the priority value of the todo
  renderTodoList();
}

function moveToTop(index) {
    let temp = todos[index]; //stores the todo in a temp variable
    todos.splice(index, 1); //deletes the todo from the array
    todos.unshift(temp); //adds the todo to the top of the array
    renderTodoList();
}

function moveToBottom(index) {
    let temp = todos[index]; //stores the todo in a temp variable
    todos.splice(index, 1); //deletes the todo from the array
    todos.push(temp); //adds the todo to the bottom of the array
    renderTodoList();
}

function renderTodoList() {
  list.innerHTML = ''; //resets the list
  todos.forEach((todo, index) => { //Loads each list item into the list
    const li = document.createElement('li'); //Create a new list item

    const checkbox = document.createElement('input'); //Create a new checkbox on item
    checkbox.type = 'checkbox'; //Set checkbox type to checkbox
    checkbox.title = 'Mark As Done'; //Set checkbox title to Mark As Done
    checkbox.checked = todo.done; //Set checkbox to list item's done value
    checkbox.addEventListener('change', () => toggleTodoDone(index));

    const Priority = document.createElement('input'); //Create a new checkbox on item
    Priority.type = 'checkbox'; //Set checkbox type to checkbox
    Priority.class = 'priority'; //Set checkbox class to priority
    Priority.title = 'Prioritize'; //Set checkbox title to Priority
    Priority.checked = todo.priority; //Set checkbox to list item's done value
    Priority.addEventListener('change', () => togglePriority(index));

    const text = document.createElement('span'); //Adds text from input to list item
    text.innerText = todo.text;

    const button = document.createElement('button'); //Adds delete button to list item
    button.innerText = 'Delete';
    button.addEventListener('click', () => deleteTodoFromList(index));
    
    if(todos[index].done == true) //checks if the todo is done, changes color and text of list item
    {
        li.style.backgroundColor = 'lightblue';
        button.style.backgroundColor = 'blue';
        button.textContent = 'Done?';
        button.addEventListener('click', () => alert('You Did A Task! Go You!'));
    }
    if(todos[index].priority == true) //checks if the todo is a priority, changes color of list item
    {
        li.style.backgroundColor = 'Gold';
        text.innerText = '☆ ' + todo.text;
    }

    li.appendChild(checkbox); //Appends all data to list item
    li.appendChild(Priority);
    li.appendChild(text);
    li.appendChild(button); //Appends delete button to list item
    list.appendChild(li); //Appends list item to list
  });
}

function renderSuggestionsList() {
    suggestionsList.innerHTML = ''; //resets the list
    suggestions.forEach((suggestion, index) => {
      const li = document.createElement('li'); //Cretes a new list item
      const stext = document.createElement('span'); //Adds text from suggestions array to list items
      stext.innerText = suggestion;
      const sbutton = document.createElement('button'); //Adds a plus button to add to todo list
      sbutton.innerText = '+'; //sets the plus button text
      sbutton.style.backgroundColor = 'darkgreen';
      sbutton.addEventListener('click', () => { //Adds the suggestion to the todo list and deletes from suggestions
        addTodoToList(suggestion);
        deleteSuggestion(index);
      });
      li.appendChild(stext); //Appends all data to list item
      li.appendChild(sbutton);
      suggestionsList.appendChild(li); //Appends list item to list
    });
}
