import React from "react";
import PlusIcon from "../../../Icons/Plus";
import styled from "styled-components";

const Wrapper = styled.div`

`

const Header = styled.header`
  display: flex;
  justify-content: left;
  align-items: center;
  height: 58px;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #8C939F;
  border: 1px solid #F3F3F3;
`

const TaskWrapper = styled.div<{ paddingLeft?: string }>`
  height: 100vh;
  border: 1px solid #F3F3F3;
`

const HeaderContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  padding-left: 36px;
  cursor: pointer;
`

const StyledPlusIcon = styled(PlusIcon)`
  margin-right: 4px;
`

const TaskCreator: React.FC = () => {
    return <Wrapper>
        <Header>
            <HeaderContentWrapper>
                <StyledPlusIcon color="#8C939F"/>
                <div>Create status</div>
            </HeaderContentWrapper>
        </Header>
        <TaskWrapper/>
    </Wrapper>
}

export default TaskCreator;