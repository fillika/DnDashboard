import styled from "styled-components";

import Header from "./Header";
import TasksBoard from "./TasksBoard";

const Wrapper = styled.div`
  width: 100%;
`

const Kanban = () => {
    return <Wrapper>
        <div>
            <Header/>
            <TasksBoard/>
        </div>
    </Wrapper>
}

export default Kanban;