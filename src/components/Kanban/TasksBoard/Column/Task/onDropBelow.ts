const onDropBelow = (item: { task: TaskType }, targetTask: TaskType, idx: number, addTask: addTaskCallback, removeTask: removeTaskCallback) => {
    addTask(item.task, targetTask.status, idx + 1);
    removeTask(item.task, targetTask.status);
}

export default onDropBelow;