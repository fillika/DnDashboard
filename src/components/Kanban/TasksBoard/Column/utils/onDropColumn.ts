const onDropColumn = (item: { task: TaskType }, targetStatus: TaskStatus, idx: number, addTask: addTaskCallback, removeTask: removeTaskCallback) => {
    addTask(item.task, targetStatus, idx);
    removeTask(item.task, targetStatus);
}

export default onDropColumn;