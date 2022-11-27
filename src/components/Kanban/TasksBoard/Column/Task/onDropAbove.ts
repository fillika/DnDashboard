const onDropAbove = (item: { task: TaskType }, targetTask: TaskType, idx: number, addTask: addTaskCallback, removeTask: removeTaskCallback)  => {
    console.log("Above", idx)
    console.log("Dragging task", item.task);
    console.log("Dropping task", targetTask);

    addTask(item.task, targetTask.status, idx);
    removeTask(item.task, targetTask.status);
}

export default onDropAbove;