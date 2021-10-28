import './style.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import createEle from './elements/createEle.js';
import createTaskArea from './elements/createTaskArea.js';
import toggleCheck from './helpers/toggleCheck.js';
import createTask from './functionalities/createTask.js'
import editTask from './functionalities/editTask';
import deleteTask from './functionalities/deleteTask.js';
import updateIdx from './functionalities/updateIdx';

class ToDo {
  constructor() {
    this.tasks = [];
  }

  localSave() {
    localStorage.setItem('AllTasks', JSON.stringify(this.tasks));
  }

  checkstorageIsEmpty() {
    if (localStorage.getItem('AllTasks') !== null) {
      this.tasks = JSON.parse(localStorage.getItem('AllTasks'));
    }
    return this.task;
  }

  displayTasks() {
    const mainArea = createTaskArea();
    const eleToAdd = document.getElementById('to-add');
    const newTaskToAdd = document.getElementById('add');
    this.checkstorageIsEmpty();
    const list = createEle('ul', 'todos', 'list-todos', null);
    const clearAllFinished = createEle('div', null, 'clear', 'Clear all completed');
    this.tasks.forEach((task) => {
      const row = createEle('li', 'tasks', `row-${task.index}`, null);
      const input = createEle('input', null, `task-${task.index}`, null);
      const inputForEdit = createEle('input', 'tasks-ed', `inp-${task.index}`, null);
      const dots = createEle('div', `${task.completed === true ? 'trash' : 'dot'}`, `dot-${task.index}`, null);
      dots.addEventListener('mouseover', () => {
        dots.setAttribute('class', 'trash');
        dots.addEventListener('click', () => {
          this.tasks = deleteTask(this.tasks, task);
          console.log(this.tasks);
          console.log(task); 
          updateIdx(this.tasks);
          this.localSave();
          window.location.reload();
        });
      });
      input.setAttribute('type', 'checkbox');
      input.setAttribute('value', task.description);
      inputForEdit.setAttribute('value', task.description);
      inputForEdit.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          inputForEdit.setAttribute('value', editTask(inputForEdit.value, task));
          this.localSave();
        };
      });
      input.checked = task.completed;
      input.addEventListener('change', () => {
        toggleCheck(input, task);
        this.localSave();
        window.location.reload();
      });
      row.appendChild(input);
      row.appendChild(inputForEdit);
      row.appendChild(dots);
      list.appendChild(row);
      this.localSave();
    });
    newTaskToAdd.addEventListener('click', () => {
      createTask(this.tasks, eleToAdd.value);
      this.localSave();
      eleToAdd.value = '';
      window.location.reload();
    });
    clearAllFinished.setAttribute('id', 'clear');
    mainArea.appendChild(list);
    mainArea.appendChild(clearAllFinished);
    return mainArea;
  }
}

const todo = new ToDo();
todo.displayTasks();