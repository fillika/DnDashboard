import React from "react";
import TaskCreator from "./TaskCreator";
import styled from "styled-components";

import NewTaskColumn from "./NewTaskColumn";
import ScheduledColumn from "./ScheduledColumn";
import InProgressColumn from "./InProgressColumn";
import CompletedColumn from "./CompletedColumn";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 76% 24%;
`

const ColumnWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.0344fr 1fr 1fr 1fr;
`

const TasksBoard: React.FC = () => {
    return <Wrapper>
        <ColumnWrapper>
            <NewTaskColumn/>
            <ScheduledColumn/>
            <InProgressColumn/>
            <CompletedColumn/>
        </ColumnWrapper>

        <TaskCreator/>
    </Wrapper>
}

export default TasksBoard;