import styled from "styled-components";
import Title from "./Title";
import List from "./List";

const Wrapper = styled.div`
  width: 154px;
  min-width: 154px;
  padding-top: 24px;
  padding-right: 16px;
  background-color: #F5F8FA;
`

const Tools = () => {
    return <Wrapper>
        <Title/>
        <List/>
    </Wrapper>
}

export default Tools;