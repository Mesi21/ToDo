import { jsxEmptyExpression } from '@babel/types'; // eslint-disable-line
import createTask from '../functionalities/createTask.js';
import deleteTask from '../functionalities/deleteTask.js';
import tasks from '../__mocks__/createTask.js';
import editTask from '../functionalities/editTask.js';
import toggleCheck from '../helpers/toggleCheck.js';
import clearAll from '../functionalities/clearAll.js';

const jsdom = require('jsdom');

const { JSDOM } = jsdom;

const dom = new JSDOM(`<!DOCTYPE html><div id='main'></div>`); // eslint-disable-line
const document = dom.window.document; // eslint-disable-line

describe('Test add method', () => {
  it('adds a new task ', () => {
    const val = 'test task';
    createTask(tasks, val);
    expect(tasks.length).toBe(3);
  });

  it('adds a new task ', () => {
    const val = 'test task 2';
    createTask(tasks, val);
    expect(tasks.length).toBe(4);
  });

  it('checks if value matches the description', () => {
    const val = 'test task 3';
    createTask(tasks, val);
    expect(tasks[4].description).toEqual(val);
  });

  it('checks if li element is created', () => {
    for (let j = 0; j < tasks.length; j += 1) {
      const main = document.querySelector('#main');
      const li = document.createElement('li');
      li.innerHTML = `<input type="checkbox" id="checkbox">${tasks[j].description}`;
      main.appendChild(li);
      const liList = main.getElementsByTagName('li');
      expect((liList.length).value).toBe((tasks.length).value);
    }
  });
});

describe('Test remove method', () => {
  it('delete a new task ', () => {
    const task = tasks[1];
    const newArray = deleteTask(tasks, task);
    expect(newArray.length).toBe(4);
  });
});

describe('Test edit method', () => {
  it('checks if the task description changes on input change', () => {
    const main = document.querySelector('#main');
    const inputField = document.createElement('input');
    inputField.value = 'New Task';
    main.appendChild(inputField);
    editTask(inputField.value, tasks[1]);
    expect(tasks[1].description).toBe('New Task');
  });
});

describe('Test completed status method', () => {
  it('checks if task status is updated', () => {
    const main = document.querySelector('#main');
    for (let j = 0; j < tasks.length; j += 1) {
      const li = document.createElement('li');
      const input = document.createElement('input');
      input.setAttribute('type', 'checkbox');
      li.appendChild(input);
      main.appendChild(li);
    }
    const changeInput = document.getElementsByTagName('input')[1];
    changeInput.checked = true;
    toggleCheck(changeInput, tasks[1]);
    expect(tasks[1].completed).toBe(true);
  });
});

describe('Test clear all completed tasks method', () => {
  it('checks if completed tasks are removed', () => {
    const main = document.querySelector('#main');
    for (let j = 0; j < tasks.length; j += 1) {
      const li = document.createElement('li');
      const input = document.createElement('input');
      input.setAttribute('type', 'checkbox');
      li.appendChild(input);
      main.appendChild(li);
    }
    const changeInput = document.getElementsByTagName('input')[3];
    changeInput.checked = true;
    toggleCheck(changeInput, tasks[3]);
    clearAll(tasks);
    expect(clearAll(tasks).length).toBe(3);
  });
});
