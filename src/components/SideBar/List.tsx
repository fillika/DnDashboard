import styled from "styled-components";
import ArrowDownIcon from "../Icons/ArrowDown";
import React from "react";

type ListItemType = {
    name: string,
    id: string
}
type ListProps = {
    title: string,
    list: ListItemType[],
    children?: JSX.Element,
}

const Wrapper = styled.div`
  font-size: 14px;
  line-height: 16px;
  margin-bottom: 12px;
`

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  cursor: pointer;
  height: 34px;
  transition: 255ms ease-out background-color;
  margin: 0 -16px 14px;
  padding: 0 16px;

  :hover {
    color: #fff;
    background-color: rgba(45, 64, 113, 0.396);
    transition: 155ms ease-in background-color;
  }
`

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
  padding-left: 7px;
`
const ListWrapper = styled.div`

`

const ListItem = styled.div`
  color: #8C939F;
  margin-bottom: 18px;
  cursor: pointer;
  transition: 255ms ease-out opacity;

  :hover {
    transition: 155ms ease-in opacity;
    opacity: 0.9;
  }

  :last-child {
    margin-bottom: 0;
  }
`

const StaticWrapper = styled.div`
  display: flex;
  align-items: center;
`

const List = ({ title, list, children }: ListProps) => {
    return <Wrapper>
        <Title>
            <StaticWrapper>
                <ImageWrapper>
                    <ArrowDownIcon color="#fff"/>
                </ImageWrapper>
                <div>{title}</div>
            </StaticWrapper>
            {children}
        </Title>

        <ListWrapper>
            {list.map(({ id, name }) => (<ListItem key={id}>{name}</ListItem>))}
        </ListWrapper>
    </Wrapper>
}

export default List;