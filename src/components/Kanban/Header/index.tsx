import styled from "styled-components";
import ButtonsBlock from "./ButtonsBlock";
import WorkPanel from "./WorkPanel";

const Wrapper = styled.header`
  height: 80px;
  background: #fff;
  box-shadow: 0 2px 4px #F0F1F2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`

const Header = () => {
    return <Wrapper>
        <ButtonsBlock/>
        <WorkPanel/>
    </Wrapper>
}

export default Header;