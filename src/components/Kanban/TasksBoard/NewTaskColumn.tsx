import React from "react";
import Column from "./Column";
import useTaskOperation from "./hooks/useTaskOperation";
import { useSelector } from "react-redux";
import { selectNewTasks } from "../../../redux/store";

const NewTaskColumn: React.FC = () => {
    const newTasks = useSelector(selectNewTasks);
    const [addTask, removeTask] = useTaskOperation();

    return <Column title="New task"
                   status="new"
                   tasks={newTasks}
                   paddingLeft={"20px"}
                   addTask={addTask} removeTask={removeTask}/>
}

export default NewTaskColumn;