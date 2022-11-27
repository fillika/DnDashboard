import React from "react";
import useTaskOperation from "./hooks/useTaskOperation";
import Column from "./Column";
import { useSelector } from "react-redux";
import { selectInProgressTasks } from "../../../redux/store";

const InProgressColumn: React.FC = () => {
    const inProgressTasks = useSelector(selectInProgressTasks);
    const [addTask, removeTask] = useTaskOperation();

    return <Column title="In progress"
                   status="inProgress"
                   tasks={inProgressTasks}
                   addTask={addTask}
                   removeTask={removeTask}/>
}

export default InProgressColumn;