const createTask = (tasks, currT) => {
  const newTask = {
    description: null,
    completed: false,
    index: 0,
  };
  newTask.description = currT;
  newTask.index = tasks.length + 1;
  tasks.push(newTask);
  return newTask;
};

export default createTask;
