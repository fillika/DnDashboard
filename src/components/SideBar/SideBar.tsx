import styled from "styled-components";
import Logo from "./Logo";
import Search from "./Search";
import Workspace from "./Workspace";
import List from "./List";

const Wrapper = styled.div`
  width: 219px;
  height: 100vh;
  background-color: #0F1D40;
  padding: 26px 16px 0;
`;

const SideBar = () => {
    return <Wrapper>
        <Logo/>
        <Search/>
        <Workspace/>
        <List title={"Favorites"}/>
        <List title={"My Projects"}/>
    </Wrapper>
}

export default SideBar;