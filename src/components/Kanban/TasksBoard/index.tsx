import React, { useState } from "react";
import Column from "./Column";
import TaskCreator from "./TaskCreator";
import styled from "styled-components";
import { newTasks as nt, completedTasks as ct, inProgressTasks as ipt, scheduledTasks as sct } from "./data"

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 76% 24%;
`

const ColumnWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.0344fr 1fr 1fr 1fr;
`

const TasksBoard: React.FC = () => {
    const [newTasks, setNewTask] = useState<TaskType[]>(nt)
    const [scheduledTasks, setScheduledTasks] = useState<TaskType[]>(sct)
    const [inProgressTasks, setInProgressTasks] = useState<TaskType[]>(ipt)
    const [completedTasks, setCompletedTasks] = useState<TaskType[]>(ct)

    return <Wrapper>
        <ColumnWrapper>
            <Column title="New task" tasks={newTasks} paddingLeft={"20px"}/>
            <Column title="Scheduled" tasks={scheduledTasks}/>
            <Column title="In progress" tasks={inProgressTasks}/>
            <Column title="Completed" tasks={completedTasks}/>
        </ColumnWrapper>

        <TaskCreator/>
    </Wrapper>
}

export default TasksBoard;