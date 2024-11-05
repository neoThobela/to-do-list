// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
  
    if (taskText === '') return;
  
    const todoList = document.getElementById('todo-list');
  
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <span class="task-text">${taskText}</span>
      <div class="controls">
        <button onclick="markComplete(this)"><img width="48" height="48" src="https://img.icons8.com/dusk/64/checked--v1.png" alt="checked--v1"/></button>
        <button onclick="editTask(this)"><img width="48" height="48" src="https://img.icons8.com/dusk/64/create-new.png" alt="create-new"/></button>
        <button onclick="removeTask(this)"><img src="images/icons8-delete-48.png" alt=""></button>
      </div>
    `;
  
    todoList.appendChild(listItem);
    taskInput.value = '';
  }
  
  // Function to mark a task as complete
  function markComplete(button) {
    const taskItem = button.closest('li').querySelector('.task-text');
    taskItem.classList.toggle('completed');
  }
  
  // Function to edit a task
  function editTask(button) {
    const taskItem = button.closest('li').querySelector('.task-text');
    const newTaskText = prompt('Edit task:', taskItem.textContent);
  
    if (newTaskText) {
      taskItem.textContent = newTaskText;
    }
  }
  
  // Function to remove a task
  function removeTask(button) {
    const taskItem = button.closest('li');
    taskItem.remove();
  }
  