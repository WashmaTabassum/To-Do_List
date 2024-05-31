// function addTask() {
//   var input = document.getElementById("input");
//   var newTask = input.value;
//   if (newTask !== "") {
//       var item = document.createElement("li");
//       item.className = "list-group-item d-flex justify-content-between align-items-center";
//       item.innerHTML = '<span>' + newTask + '</span>' +
//           '<div>' +
//           '<button class="btn btn-success btn-sm done" onclick="markDone(this.parentNode.parentNode)">&#x2713;</button> ' +
//           '<button class="btn btn-danger btn-sm remove" onclick="remove(this.parentNode.parentNode)">&#x2715;</button> ' +
//           '<button class="btn btn-info btn-sm important" onclick="Important(this.parentNode.parentNode)">!</button>' +
//           '</div>';
//       document.getElementById("tasks").appendChild(item);
//       input.value = "";
//       input.placeholder = "Enter next task";
//   }
// }

// function markDone(item) {
//   item.className = 'list-group-item d-flex justify-content-between align-items-center finished';
// }

// function remove(item) {
//   if (item.classList.contains('finished')) {
//       item.remove();
//   }
// }

// function doAbout() {
//   var aboutSection = document.getElementById("aboutSection");
//   aboutSection.classList.remove("d-none");
//   document.getElementById("divabout").innerHTML = "Author is Washma. This Todo list helps you manage your tasks efficiently and effectively. You can mark tasks as done, remove them, or mark them as important.";
// }

// function clearAbout() {
//   var aboutSection = document.getElementById("aboutSection");
//   aboutSection.classList.add("d-none");
//   document.getElementById("divabout").innerHTML = "";
// }

// function Important(item) {
//   item.classList.add('important-task');
//   setTimeout(() => {
//       item.classList.remove('important-task');
//       item.classList.add('important');
//   }, 500);
// }


// document.addEventListener('DOMContentLoaded', (event) => {
//   loadTasks();
// });

// function addTask() {
//   const taskInput = document.getElementById('taskInput');
//   const taskText = taskInput.value.trim();

//   if (taskText !== "") {
//       const task = { id: Date.now(), text: taskText, important: false, finished: false };
//       saveTask(task);
//       appendTaskToDOM(task);
//       taskInput.value = "";
//   }
// }

// function appendTaskToDOM(task) {
//   const taskList = document.getElementById('taskList');
//   const listItem = document.createElement('li');
//   listItem.className = `list-group-item d-flex justify-content-between align-items-center ${task.finished ? 'finished' : ''} ${task.important ? 'important' : ''}`;
//   listItem.dataset.id = task.id;

//   const span = document.createElement('span');
//   span.textContent = task.text;

//   const input = document.createElement('input');
//   input.type = 'text';
//   input.className = 'form-control d-none';
//   input.value = task.text;

//   const buttonsDiv = document.createElement('div');

//   const markDoneButton = document.createElement('button');
//   markDoneButton.className = 'btn btn-success btn-sm done';
//   markDoneButton.innerHTML = '&#x2713;';
//   markDoneButton.addEventListener('click', () => toggleTaskDone(task.id));

//   const editButton = document.createElement('button');
//   editButton.className = 'btn btn-warning btn-sm edit';
//   editButton.innerHTML = '&#x270E;';
//   editButton.addEventListener('click', () => toggleEditTask(listItem));

//   const saveButton = document.createElement('button');
//   saveButton.className = 'btn btn-primary btn-sm save d-none';
//   saveButton.innerHTML = '&#x2714;';
//   saveButton.addEventListener('click', () => saveEditTask(task.id, listItem));

//   const removeButton = document.createElement('button');
//   removeButton.className = 'btn btn-danger btn-sm remove';
//   removeButton.innerHTML = '&#x2715;';
//   removeButton.addEventListener('click', () => removeTask(task.id));

//   const importantButton = document.createElement('button');
//   importantButton.className = 'btn btn-info btn-sm important';
//   importantButton.innerHTML = '!';
//   importantButton.addEventListener('click', () => toggleTaskImportant(task.id));

//   buttonsDiv.appendChild(markDoneButton);
//   buttonsDiv.appendChild(editButton);
//   buttonsDiv.appendChild(saveButton);
//   buttonsDiv.appendChild(removeButton);
//   buttonsDiv.appendChild(importantButton);

//   listItem.appendChild(span);
//   listItem.appendChild(input);
//   listItem.appendChild(buttonsDiv);

//   taskList.appendChild(listItem);
// }

// function loadTasks() {
//   const tasks = getTasks();
//   tasks.forEach(task => appendTaskToDOM(task));
// }

// function saveTask(task) {
//   const tasks = getTasks();
//   tasks.push(task);
//   localStorage.setItem('tasks', JSON.stringify(tasks));
// }

// function updateTaskText(taskId, newText) {
//   const tasks = getTasks();
//   const taskIndex = tasks.findIndex(task => task.id === taskId);
//   if (taskIndex !== -1) {
//       tasks[taskIndex].text = newText;
//       localStorage.setItem('tasks', JSON.stringify(tasks));
//   }
// }

// function toggleEditTask(listItem) {
//   const span = listItem.querySelector('span');
//   const input = listItem.querySelector('input');
//   const editButton = listItem.querySelector('.edit');
//   const saveButton = listItem.querySelector('.save');

//   span.classList.toggle('d-none');
//   input.classList.toggle('d-none');
//   editButton.classList.toggle('d-none');
//   saveButton.classList.toggle('d-none');
// }

// function saveEditTask(taskId, listItem) {
//   const input = listItem.querySelector('input');
//   const newText = input.value.trim();
//   if (newText) {
//       updateTaskText(taskId, newText);
//       listItem.querySelector('span').textContent = newText;
//       toggleEditTask(listItem);
//   }
// }

// function toggleTaskDone(taskId) {
//   const tasks = getTasks();
//   const taskIndex = tasks.findIndex(task => task.id === taskId);
//   if (taskIndex !== -1) {
//       tasks[taskIndex].finished = !tasks[taskIndex].finished;
//       localStorage.setItem('tasks', JSON.stringify(tasks));
//       document.querySelector(`li[data-id="${taskId}"]`).classList.toggle('finished');
//   }
// }

// function toggleTaskImportant(taskId) {
//   const tasks = getTasks();
//   const taskIndex = tasks.findIndex(task => task.id === taskId);
//   if (taskIndex !== -1) {
//       tasks[taskIndex].important = !tasks[taskIndex].important;
//       localStorage.setItem('tasks', JSON.stringify(tasks));
//       document.querySelector(`li[data-id="${taskId}"]`).classList.toggle('important');
//   }
// }

// function removeTask(taskId) {
//   let tasks = getTasks();
//   tasks = tasks.filter(task => task.id !== taskId);
//   localStorage.setItem('tasks', JSON.stringify(tasks));
//   document.querySelector(`li[data-id="${taskId}"]`).remove();
// }

// function getTasks() {
//   const tasks = localStorage.getItem('tasks');
//   return tasks ? JSON.parse(tasks) : [];
// }

// function doAbout() {
//   const aboutSection = document.getElementById("aboutSection");
//   aboutSection.classList.remove("d-none");
//   document.getElementById("divabout").innerHTML = "Author is Washma. This Todo list helps you manage your tasks efficiently and effectively. You can mark tasks as done, remove them, or mark them as important.";
// }

// function clearAbout() {
//   const aboutSection = document.getElementById("aboutSection");
//   aboutSection.classList.add("d-none");
//   document.getElementById("divabout").innerHTML = "";
// }

document.addEventListener('DOMContentLoaded', (event) => {
  loadTasks();
});

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
      const task = { id: Date.now(), text: taskText, important: false, finished: false };
      saveTask(task);
      appendTaskToDOM(task);
      taskInput.value = "";
  }
}

function appendTaskToDOM(task) {
  const taskList = document.getElementById('taskList');
  const listItem = document.createElement('li');
  listItem.className = `list-group-item d-flex justify-content-between align-items-center ${task.finished ? 'finished' : ''} ${task.important ? 'important' : ''}`;
  listItem.dataset.id = task.id;

  const span = document.createElement('span');
  span.textContent = task.text;

  const input = document.createElement('input');
  input.type = 'text';
  input.className = 'form-control d-none';
  input.value = task.text;

  const buttonsDiv = document.createElement('div');

  const markDoneButton = document.createElement('button');
  markDoneButton.className = 'btn btn-done btn-sm done';
  markDoneButton.innerHTML = '&#x2713;';
  markDoneButton.addEventListener('click', () => toggleTaskDone(task.id));

  const editButton = document.createElement('button');
  editButton.className = 'btn btn-edit btn-sm edit';
  editButton.innerHTML = '&#x270E;';
  editButton.addEventListener('click', () => toggleEditTask(listItem));

  const saveButton = document.createElement('button');
  saveButton.className = 'btn btn-save btn-sm save d-none';
  saveButton.innerHTML = '&#x2714;';
  saveButton.addEventListener('click', () => saveEditTask(task.id, listItem));

  const removeButton = document.createElement('button');
  removeButton.className = 'btn btn-remove btn-sm remove';
  removeButton.innerHTML = '&#x2715;';
  removeButton.addEventListener('click', () => removeTask(task.id));

  const importantButton = document.createElement('button');
  importantButton.className = 'btn btn-important btn-sm important';
  importantButton.innerHTML = '!';
  importantButton.addEventListener('click', () => toggleTaskImportant(task.id));

  buttonsDiv.appendChild(markDoneButton);
  buttonsDiv.appendChild(editButton);
  buttonsDiv.appendChild(saveButton);
  buttonsDiv.appendChild(removeButton);
  buttonsDiv.appendChild(importantButton);

  listItem.appendChild(span);
  listItem.appendChild(input);
  listItem.appendChild(buttonsDiv);

  taskList.appendChild(listItem);
}

function loadTasks() {
  const tasks = getTasks();
  tasks.forEach(task => appendTaskToDOM(task));
}

function saveTask(task) {
  const tasks = getTasks();
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function updateTaskText(taskId, newText) {
  const tasks = getTasks();
  const taskIndex = tasks.findIndex(task => task.id === taskId);
  if (taskIndex !== -1) {
      tasks[taskIndex].text = newText;
      localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}

function toggleEditTask(listItem) {
  const span = listItem.querySelector('span');
  const input = listItem.querySelector('input');
  const editButton = listItem.querySelector('.edit');
  const saveButton = listItem.querySelector('.save');

  span.classList.toggle('d-none');
  input.classList.toggle('d-none');
  editButton.classList.toggle('d-none');
  saveButton.classList.toggle('d-none');
}

function saveEditTask(taskId, listItem) {
  const input = listItem.querySelector('input');
  const newText = input.value.trim();
  if (newText) {
      updateTaskText(taskId, newText);
      listItem.querySelector('span').textContent = newText;
      toggleEditTask(listItem);
  }
}

function toggleTaskDone(taskId) {
  const tasks = getTasks();
  const taskIndex = tasks.findIndex(task => task.id === taskId);
  if (taskIndex !== -1) {
      tasks[taskIndex].finished = !tasks[taskIndex].finished;
      localStorage.setItem('tasks', JSON.stringify(tasks));
      document.querySelector(`li[data-id="${taskId}"]`).classList.toggle('finished');
  }
}

function toggleTaskImportant(taskId) {
  const tasks = getTasks();
  const taskIndex = tasks.findIndex(task => task.id === taskId);
  if (taskIndex !== -1) {
      tasks[taskIndex].important = !tasks[taskIndex].important;
      localStorage.setItem('tasks', JSON.stringify(tasks));
      document.querySelector(`li[data-id="${taskId}"]`).classList.toggle('important');
  }
}

function removeTask(taskId) {
  let tasks = getTasks();
  tasks = tasks.filter(task => task.id !== taskId);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  document.querySelector(`li[data-id="${taskId}"]`).remove();
}

function getTasks() {
  const tasks = localStorage.getItem('tasks');
  return tasks ? JSON.parse(tasks) : [];
}

function doAbout() {
  const aboutSection = document.getElementById("aboutSection");
  aboutSection.classList.remove("d-none");
  document.getElementById("divabout").innerHTML = "Author is Washma. This Todo list helps you manage your tasks efficiently and effectively. You can mark tasks as done, remove them, or mark them as important.";
}

function clearAbout() {
  const aboutSection = document.getElementById("aboutSection");
  aboutSection.classList.add("d-none");
  document.getElementById("divabout").innerHTML = "";
}
