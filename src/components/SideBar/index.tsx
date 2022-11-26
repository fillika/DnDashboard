import styled from "styled-components";
import Logo from "./Logo";
import Search from "./Search";
import Workspace from "./Workspace";
import List from "./List";
import { favorites, projects } from "./data";
import PlusIcon from "../Icons/Plus";

const Wrapper = styled.div`
  width: 219px;
  min-width: 219px;
  height: 100vh;
  background-color: #0F1D40;
  padding: 26px 16px 0;
`;

const SearchWrapper = styled.div`
  position: relative;
  margin-bottom: 19px;
`

const SideBar = () => {
    return <Wrapper>
        <Logo/>
        <SearchWrapper>
            <Search/>
        </SearchWrapper>
        <Workspace/>
        <List title={"Favorites"} list={favorites}/>
        <List title={"My Projects"} list={projects}>
            <PlusIcon color="#fff"/>
        </List>
    </Wrapper>
}

export default SideBar;