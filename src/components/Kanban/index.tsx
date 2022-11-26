import Header from "./Header";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
`

const Kanban = () => {
    return <Wrapper>
        <div>
            <Header/>
            <div>Расписание</div>
        </div>
    </Wrapper>
}

export default Kanban;