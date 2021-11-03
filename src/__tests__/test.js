import createTask from '../functionalities/createTask.js';
import tasks from '../__mocks__/createTask.js'

test('adds a new task ', () => {
  const val = 'test task';
  createTask(tasks, val);
  expect(tasks.length).toBe(3);
});
