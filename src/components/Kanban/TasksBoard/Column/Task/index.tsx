import React from "react";
import styled from "styled-components";
import { useDrag, useDrop } from "react-dnd";
import onDropAbove from "./onDropAbove";
import onDropBelow from "./onDropBelow";

type Props = {
    task: TaskType,
    idx: number,
    addTask: addTaskCallback;
    removeTask: removeTaskCallback;
}

const Wrapper = styled.div<{ color: string, isCompleted: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 15px;
  background: ${props => {
    if (props.isCompleted) {
      return "#F0F0F0"
    }

    return props.color;
  }};
  border-radius: 8px;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: ${props => props.isCompleted ? "#A5A5A5" : "#222"};
  margin-bottom: 10px;
  cursor: pointer;
  position: relative;
`

const Time = styled.div<{ isCompleted: boolean }>`
  font-size: 13px;
  line-height: 15px;
  color: ${props => props.isCompleted ? "#A5A5A5" : "#435E52"}
`

const Title = styled.div<{ isCompleted: boolean }>`
  margin-bottom: 5px;
  text-decoration: ${props => props.isCompleted ? "line-through" : "none"};
  color: ${props => props.isCompleted ? "line-through" : "none"};
`

const DropAreaAbove = styled.div<{ isDrag: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50%;
  border-top: ${props => props.isDrag ? "3px solid" : "none"};
  border-bottom: none;
`

const DropAreaBelow = styled(DropAreaAbove)`
  top: 50%;
  border-bottom: ${props => props.isDrag ? "3px solid" : "none"};
  border-top: none;
`

const Task: React.FC<Props> = ({ task, idx, addTask, removeTask }) => {
    const { name, color, isCompleted, time } = task;

    const [, dragRef] = useDrag(() => ({
        type: "Task",
        item: {
            task
        },
    }))

    const [{isOverAbove}, dropRefAbove] = useDrop(
        () => ({
            accept: "Task",
            drop: (item: { task: TaskType }) => onDropAbove(item, task, idx, addTask, removeTask),
            collect: monitor => ({
                isOverAbove: monitor.isOver(),
            }),
        }),
        []
    )

    const [{isOverBelow}, dropRefBelow] = useDrop(
        () => ({
            accept: "Task",
            drop: (item: { task: TaskType }) => onDropBelow(item, task, idx, addTask, removeTask),
            collect: monitor => ({
                isOverBelow: monitor.isOver(),
            }),
        }),
        []
    )

    return <Wrapper color={color} isCompleted={isCompleted} ref={dragRef}>
        <DropAreaAbove ref={dropRefAbove} isDrag={isOverAbove}/>
        <DropAreaBelow ref={dropRefBelow} isDrag={isOverBelow}/>
        <div>
            <Title isCompleted={isCompleted}>
                {name}
            </Title>
            <Time isCompleted={isCompleted}>
                {convertMinutesToString(time)}h
            </Time>
        </div>
    </Wrapper>
}

function convertMinutesToString(minutes: number) {
    const hours = Math.floor(minutes / 60),
        rest = minutes % 60;

    return `${hours}:${rest < 10 ? "0" + rest : rest}`
}

export default Task;