import updateIdx from './updateIdx.js';

const clearAll = (allTasks) => {
  allTasks = allTasks.filter((t) => !t.completed);
  allTasks = updateIdx(allTasks);
  return allTasks;
};

export default clearAll;
