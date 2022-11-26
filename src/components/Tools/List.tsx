import styled from "styled-components";
import ListItem from "./ListItem";

const Wrapper = styled.div`
  font-size: 14px;
  line-height: 16px;
`

const List = () => {
    return <Wrapper>
        <ListItem title="Roadmap" isActive={false} iconName="RoadMap"/>
        <ListItem title="Schedule" isActive={true} iconName="Schedule"/>
        <ListItem title="Tasks" isActive={false} iconName="Tasks"/>
        <ListItem title="Notes" isActive={false} iconName="Notes"/>
        <ListItem title="Files" isActive={false} iconName="Files"/>
    </Wrapper>
}

export default List;