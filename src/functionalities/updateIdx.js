const updateIdx = (allTasks) => {
  allTasks.forEach((task, idx) => {
    task.index = idx + 1;
  });

  return allTasks;
};

export default updateIdx;
