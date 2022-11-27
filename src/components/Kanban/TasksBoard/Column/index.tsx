import React from "react";
import styled from "styled-components";
import Task from "./Task";

type Props = {
    title: string;
    tasks: TaskType[];
    className?: string;
    paddingLeft?: string;
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

const Column: React.FC<Props> = ({ title, tasks, className, paddingLeft }) => {
    return <Wrapper className={className}>
        <Header>
            <HeaderContentWrapper>
                <Title>{title}</Title><Counter>{tasks.length}</Counter>
            </HeaderContentWrapper>
        </Header>
        <TaskWrapper paddingLeft={paddingLeft}>
            {tasks.map(task => <Task key={task.id} task={task}/>)}
        </TaskWrapper>
    </Wrapper>
}

export default Column;