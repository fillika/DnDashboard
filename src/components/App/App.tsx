import React from 'react';
import SideBar from "../SideBar/SideBar";
import Tools from "../Tools/Tools";
import styled from "styled-components";
import Kanban from "../Kanban";

const Wrapper = styled.div`
  display: flex;
`

function App() {
    return (
        <Wrapper>
            <SideBar/>
            <Tools/>
            <Kanban/>
        </Wrapper>
    );
}

export default App;
