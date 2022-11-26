import styled from "styled-components";

import Button from "../../styledMarkup/Button";
import PlusIcon from "../../Icons/Plus";
import ArrowDownIcon from "../../Icons/ArrowDown";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Text = styled.span<{ color: string }>`
  font-size: 14px;
  line-height: 16px;
  color: ${props => props.color};
`

const ButtonWithBlueColor = styled(Button)`
  background-color: #0094FF;

  :hover {
    background-color: #0080df;
  }
`;

const ButtonWrapper = styled.span`
  margin-right: 16px;
`

const ContentWrapperInsideButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const StyledPlusIcon = styled(PlusIcon)`
  margin-right: 7px;
`

const StyledArrowDownIcon = styled(ArrowDownIcon)`
  margin-left: 15px;
`

const ButtonsBlock = () => {
    return <Wrapper>
        <ButtonWrapper>
            <ButtonWithBlueColor>
                <ContentWrapperInsideButton>
                    <StyledPlusIcon color={"#fff"}/>
                    <Text color={"#fff"}>
                        Add&nbsp;new
                    </Text>
                </ContentWrapperInsideButton>
            </ButtonWithBlueColor>
        </ButtonWrapper>
        <ButtonWrapper>
            <Button>
                <ContentWrapperInsideButton>
                    <Text color={"#222"}>
                        Kanban
                    </Text>
                    <StyledArrowDownIcon color={"#8C939F"}/>
                </ContentWrapperInsideButton>
            </Button>
        </ButtonWrapper>
        <ButtonWrapper>
            <Button>
                <ContentWrapperInsideButton>
                    <Text color={"#222"}>
                        Filter
                    </Text>
                    <StyledArrowDownIcon color={"#8C939F"}/>
                </ContentWrapperInsideButton>
            </Button>
        </ButtonWrapper>
    </Wrapper>
}

export default ButtonsBlock;