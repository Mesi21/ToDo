import { jsxEmptyExpression } from '@babel/types';
import createTask from '../functionalities/createTask.js';
import deleteTask from '../functionalities/deleteTask.js';
import tasks from '../__mocks__/createTask.js';

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const dom = new JSDOM(`<!DOCTYPE html><div id="main"></div>`);
const document = dom.window.document;

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
    for (let j = 0; j < tasks.length; j++)    {
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


})