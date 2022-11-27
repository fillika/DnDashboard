const onDropAbove = (item: { task: TaskType }, targetTask: TaskType, idx: number, addTask: addTaskCallback, removeTask: removeTaskCallback)  => {
    addTask(item.task, targetTask.status, idx);
    removeTask(item.task, targetTask.status);
}

export default onDropAbove;