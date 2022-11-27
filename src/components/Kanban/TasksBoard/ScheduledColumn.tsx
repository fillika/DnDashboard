import React from "react";
import Column from "./Column";
import { useSelector } from "react-redux";
import { selectScheduledTasks } from "../../../redux/store";
import useTaskOperation from "./hooks/useTaskOperation";

const ScheduledColumn: React.FC = () => {
    const scheduledTasks = useSelector(selectScheduledTasks);
    const [addTask, removeTask] = useTaskOperation();

    return <Column title="Scheduled" tasks={scheduledTasks} addTask={addTask} removeTask={removeTask}/>
}

export default ScheduledColumn;