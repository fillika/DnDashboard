import React from "react";
import styled from "styled-components";

const Wrapper = styled.div<{ color: string, isCompleted: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 15px;
  background: ${props => props.color};
  border-radius: 8px;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: ${props => props.isCompleted ? "#A5A5A5": "#222"};
  margin-bottom: 10px;
  cursor: pointer;
`

const Time = styled.div<{ isCompleted: boolean }>`
  font-size: 13px;
  line-height: 15px;
  color: ${props => props.isCompleted ? "#A5A5A5": "#435E52"}
`

const Title = styled.div<{isCompleted: boolean}>`
  margin-bottom: 5px;
  text-decoration: ${props => props.isCompleted ? "line-through": "none"};
  color:${props => props.isCompleted ? "line-through": "none"};
`

const Task: React.FC<{ task: TaskType }> = ({ task }) => {
    const { id, name, color, isCompleted, time, deadline } = task;

    return <Wrapper color={color} isCompleted={isCompleted}>
        <Title isCompleted={isCompleted}>
            {name}
        </Title>
        <Time isCompleted={isCompleted}>
            {convertMinutesToString(time)}h
        </Time>
    </Wrapper>
}

function convertMinutesToString(minutes: number) {
    const hours = Math.floor(minutes / 60),
        rest = minutes % 60;

    return `${hours}:${rest < 10 ? "0" + rest : rest}`
}

export default Task;