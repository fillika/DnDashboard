import React from "react";
import styled from "styled-components";
import Search from "../Search";
import Avatar from "../../../Avatar";
import Notification from "./Notification";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

const StyledAvatar = styled(Avatar)`
  width: 40px;
  height: 40px;
`

const WorkPanel: React.FC = () => {
    return <Wrapper>
        <Search/>
        <Notification/>
        <StyledAvatar/>
    </Wrapper>
}

export default WorkPanel;