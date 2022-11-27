import React from "react";
import Column from "./Column";
import useTaskOperation from "./hooks/useTaskOperation";
import { useSelector } from "react-redux";
import { selectCompletedTasks } from "../../../redux/store";

const CompletedColumn: React.FC = () => {
    const completedTasks = useSelector(selectCompletedTasks);
    const [addTask, removeTask] = useTaskOperation();

    return <Column title="Completed" tasks={completedTasks} addTask={addTask} removeTask={removeTask}/>
}

export default CompletedColumn;