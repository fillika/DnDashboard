import styled from "styled-components";
import avatar from "../../images/avatar.png";

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


const ImageWrapper = styled.div`
  overflow: hidden;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  margin-right: 8px;
  
  img {
    width: 100%;
  }
`

const Title = styled.span`
  cursor: pointer;
`

const Workspace = () => {
    return <Wrapper>
        <ImageWrapper>
            <img src={avatar} alt="User avatar"/>
        </ImageWrapper>
        <Title>
            My workspace
        </Title>
    </Wrapper>
}

export default Workspace;