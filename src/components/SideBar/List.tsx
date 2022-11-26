import arrowDown from "../../images/down-arrow-svgrepo-com.svg";
import styled from "styled-components";

type ListItemType = {
    name: string,
    id: string
}
type ListProps = {
    title: string,
    list: ListItemType[]
}

const Wrapper = styled.div`
  font-size: 14px;
  line-height: 16px;
  margin-bottom: 12px;
`

const Title = styled.div`
  display: flex;
  align-items: center;
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

const Img = styled.img`
  width: 10px;
  height: 5px;
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

const List = ({ title, list }: ListProps) => {
    return <Wrapper>
        <Title>
            <ImageWrapper><Img src={arrowDown} alt="arrow down"/></ImageWrapper>
            <div>{title}</div>
        </Title>

        <ListWrapper>
            {list.map(({ id, name }) => (<ListItem key={id}>{name}</ListItem>))}
        </ListWrapper>
    </Wrapper>
}

export default List;