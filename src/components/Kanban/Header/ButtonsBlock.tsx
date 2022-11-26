import styled from "styled-components";

import Button from "../../styledMarkup/Button";
import PlusIcon from "../../Icons/Plus";
import ArrowDownIcon from "../../Icons/ArrowDown";
import { useState } from "react";
import Popup from "../../Popup";

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

const ButtonWrapper = styled.div`
  position: relative;
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

const StyledArrowDownIcon = styled(ArrowDownIcon)<{ isActive?: boolean }>`
  margin-left: 15px;
  transform: ${props => props.isActive ? "rotate(180deg)" : ""};
  transition: 155ms ease-in transform;
`

const ListElement = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  height: 40px;
  min-width: 120px;
  background-color: ${props => props.isActive ? "#F5F8FA" : "transparent"};
  border-radius: 4px;
  font-size: 14px;
  line-height: 16px;
  color: #000000;
  padding-left: 8px;
  cursor: pointer;
`

const ButtonsBlock = () => {
    const [isTypePopupVisible, setTypePopupVisible] = useState(false);

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
            <Button onClick={() => setTypePopupVisible(state => !state)}>
                <ContentWrapperInsideButton>
                    <Text color={"#222"}>
                        Kanban
                    </Text>
                    <StyledArrowDownIcon color={"#8C939F"} isActive={isTypePopupVisible}/>
                </ContentWrapperInsideButton>
            </Button>

            <Popup isActive={isTypePopupVisible}>
                <div>
                    <ListElement isActive={false}>Board view</ListElement>
                    <ListElement isActive={false}>Table view</ListElement>
                    <ListElement isActive={true}>Kanban</ListElement>
                </div>
            </Popup>
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