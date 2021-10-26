import './style.css';
import createEle from './elements/createEle.js';
import createTaskArea from './elements/createTaskArea.js';
import '@fortawesome/fontawesome-free/js/all.js';

const todoList = [
  {
    description: 'task1',
    completed: false, 
    index: 1,
  },
  {
    description: 'task2',
    completed: false, 
    index: 2,
  },
  { 
    description: 'task3',
    completed: false, 
    index: 3,
  },
];

const displayTasks = () => {
  const mainArea = createTaskArea();
  const list = createEle('ul', 'todos', 'list-todos', null);
  const clearAllFinished = createEle('div', null, 'clear', 'Clear all completed');
  todoList.forEach((task) => {
    const row = createEle('li', null, `task-${task.index}`, null);
    const label = createEle('label', null, null, task.description);
    const input = createEle('input', null, task.index, null);
    console.log(input)
    const dots = createEle('div', `${task.completed === true ? 'trash' : 'dot'}`, `dot-${task.index}`, null);
    input.setAttribute('type', 'checkbox');
    input.setAttribute('value', task.description);
    label.htmlFor = `${task.index}`;
    row.appendChild(input);
    row.appendChild(label);
    row.appendChild(dots);
    list.appendChild(row);
  });
  clearAllFinished.setAttribute('id', 'clear');
  mainArea.appendChild(list);
  mainArea.appendChild(clearAllFinished);
  return mainArea;
};

displayTasks();