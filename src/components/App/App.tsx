import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Provider } from 'react-redux';
import store from "../../redux/store";

import SideBar from "../SideBar";
import Tools from "../Tools";
import styled from "styled-components";
import Kanban from "../Kanban";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
`

function App() {
    return (
        <Provider store={store}>
            <DndProvider backend={HTML5Backend}>
                <Wrapper>
                    <SideBar/>
                    <Tools/>
                    <Kanban/>
                </Wrapper>
            </DndProvider>
        </Provider>
    );
}

export default App;
