import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import SideBar from "../SideBar";
import Tools from "../Tools";
import styled from "styled-components";
import Kanban from "../Kanban";


const Wrapper = styled.div`
  display: flex;
`

function App() {
    return (
        <DndProvider backend={HTML5Backend}>
            <Wrapper>
                <SideBar/>
                <Tools/>
                <Kanban/>
            </Wrapper>
        </DndProvider>
    );
}

export default App;
