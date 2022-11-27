import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Column from "./Column";
import TaskCreator from "./TaskCreator";
import styled from "styled-components";
import { removeFromNewTasks, addNewTask, changeNewTaskIndex } from "../../../redux/slices/newTasks";
import {
    removeFromScheduledTasks,
    addFromScheduledTask,
    changeScheduledTaskIndex
} from "../../../redux/slices/scheduledTasks";
import {
    removeFromInProgressTasks,
    addInProgressTask,
    changeInProgressTaskIndex
} from "../../../redux/slices/inProgressTasks";
import {
    removeFromCompletedTasks,
    addCompletedTask,
    changeCompletedTaskIndex
} from "../../../redux/slices/completedTasks";
import {
    selectNewTasks,
    selectCompletedTasks,
    selectScheduledTasks,
    selectInProgressTasks
} from "../../../redux/store";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 76% 24%;
`

const ColumnWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.0344fr 1fr 1fr 1fr;
`

const TasksBoard: React.FC = () => {
    const newTasks = useSelector(selectNewTasks);
    const scheduledTasks = useSelector(selectScheduledTasks);
    const inProgressTasks = useSelector(selectInProgressTasks);
    const completedTasks = useSelector(selectCompletedTasks);
    const dispatch = useDispatch();

    const addTask: addTaskCallback = (task, status, index) => {
        if (task.status !== status) {
            switch (status) {
                case "new":
                    dispatch(addNewTask({ task, index }));
                    break;
                case "scheduled":
                    dispatch(addFromScheduledTask({ task, index }));
                    break;
                case "inProgress":
                    dispatch(addInProgressTask({ task, index }));
                    break;
                case "completed":
                    dispatch(addCompletedTask({ task, index }));
                    break;
                default:
                    break;
            }
        } else {
            switch (status) {
                case "new":
                    dispatch(changeNewTaskIndex({ task, index }));
                    break;
                case "scheduled":
                    dispatch(changeScheduledTaskIndex({ task, index }));
                    break;
                case "inProgress":
                    dispatch(changeInProgressTaskIndex({ task, index }));
                    break;
                case "completed":
                    dispatch(changeCompletedTaskIndex({ task, index }));
                    break;
                default:
                    break;
            }
        }
    }

    const removeTask: removeTaskCallback = (task, targetStatus) => {
        if (targetStatus !== task.status) {
            switch (task.status) {
                case "new":
                    dispatch(removeFromNewTasks(task.id))
                    break;
                case "scheduled":
                    dispatch(removeFromScheduledTasks(task.id))
                    break;
                case "inProgress":
                    dispatch(removeFromInProgressTasks(task.id))
                    break;
                case "completed":
                    dispatch(removeFromCompletedTasks(task.id))
                    break;
                default:
                    break;
            }
        }
    }

    return <Wrapper>
        <ColumnWrapper>
            <Column title="New task" tasks={newTasks}
                    paddingLeft={"20px"}
                    addTask={addTask} removeTask={removeTask}/>
            <Column title="Scheduled" tasks={scheduledTasks} addTask={addTask} removeTask={removeTask}/>
            <Column title="In progress" tasks={inProgressTasks} addTask={addTask} removeTask={removeTask}/>
            <Column title="Completed" tasks={completedTasks} addTask={addTask} removeTask={removeTask}/>
        </ColumnWrapper>

        <TaskCreator/>
    </Wrapper>
}

export default TasksBoard;