import styled from "styled-components";
import Avatar from "../Avatar";

const Wrapper = styled.div`
  background-color: #2D4071;
  margin: 0 -16px;
  padding: 6px 16px;
  display: flex;
  align-items: center;
  height: 34px;
  color: #fff;
  font-size: 14px;
  line-height: 16px;
  margin-bottom: 8px;
`

const StyledAvatar = styled(Avatar)`
  margin-right: 8px;
`

const Title = styled.span`
  cursor: pointer;
`

const Workspace = () => {
    return <Wrapper>
        <StyledAvatar/>
        <Title>
            My workspace
        </Title>
    </Wrapper>
}

export default Workspace;