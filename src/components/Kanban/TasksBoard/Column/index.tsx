import React from "react";
import styled from "styled-components";
import Task from "./Task";
import { useDrop } from "react-dnd";
import onDropColumn from "./utils/onDropColumn";

type Props = {
    title: string;
    tasks: TaskType[];
    className?: string;
    paddingLeft?: string;
    addTask: addTaskCallback;
    removeTask: removeTaskCallback;
    status: TaskStatus
}

const Wrapper = styled.div`
`

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 58px;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #222;
`

const Title = styled.span`
  margin-right: 10px;
`

const Counter = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 26px;
  height: 20px;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: right;

  color: #8C939F;
  background-color: #E8EBEF;
  border-radius: 100px;
`

const HeaderContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
`

const TaskWrapper = styled.div<{ paddingLeft?: string }>`
  height: 100vh;
  border: 1px solid #F3F3F3;
  padding: 39px 10px 0;
  padding-left: ${props => props.paddingLeft ? props.paddingLeft : "10px"};
`

const DropZone = styled.div`
  height: 100%;
`

const Column: React.FC<Props> = (props) => {
    const { title, tasks, className, paddingLeft, status, addTask, removeTask } = props;
    const onDrop = (item: { task: TaskType }) => {
        onDropColumn(item, status, tasks.length, addTask, removeTask);
    };

    const [, dropRef] = useDrop(
        () => ({
            accept: "Task",
            drop: onDrop,
        }),
        []
    )

    return <Wrapper className={className}>
        <Header>
            <HeaderContentWrapper>
                <Title>{title}</Title><Counter>{tasks.length}</Counter>
            </HeaderContentWrapper>
        </Header>
        <TaskWrapper paddingLeft={paddingLeft}>
            {tasks.map((task, i) => {
                return <Task key={task.id} task={task} idx={i} addTask={addTask} removeTask={removeTask}/>
            })}
            <DropZone ref={dropRef}/>
        </TaskWrapper>
    </Wrapper>
}

export default Column;