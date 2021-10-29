const updateIdx = (allTasks) => {
  allTasks.forEach((task, idx) => {
    task.index = idx;
  });

  return allTasks;
};

export default updateIdx;
