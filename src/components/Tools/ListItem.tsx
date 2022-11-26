import styled from "styled-components";
import React from "react";
import Icon from "./Icon";
import { IconNameType } from "./Icon";

type ListItemProps = {
    title: string;
    isActive: boolean;
    iconName: IconNameType;
}

const Wrapper = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  height: 50px;
  width: 138px;
  padding-left: 10px;

  background-color: ${props => props.isActive ? "#fff" : "transparent"};
  border-radius: 0 8px 8px 0;
  cursor: pointer;
`

const Title = styled.div<{ color: string }>`
  color: ${props => props.color}
`

const ImageWrapper = styled.div`
  margin-right: 11px;
`

const ListItem = ({ title, isActive, iconName }: ListItemProps) => {
    const color = isActive ? "#0094FF" : "#8C939F";

    return <Wrapper isActive={isActive}>
        <ImageWrapper><Icon color={color} iconName={iconName}/></ImageWrapper>
        <Title color={color}>{title}</Title>
    </Wrapper>
}

export default ListItem;