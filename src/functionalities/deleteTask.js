const deleteTask = (allTasks, taskToDel) => {
  allTasks = allTasks.filter((t) => t.index !== taskToDel.index);
  return allTasks;
};

export default deleteTask;
