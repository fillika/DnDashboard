import styled from "styled-components";
import Logo from "./Logo";
import Search from "./Search";
import Workspace from "./Workspace";
import List from "./List";

const favorites = [
        {
            name: "Marketing",
            id: "__1"
        },
        {
            name: "Mobile App",
            id: "__2"
        },
    ],
    projects = [
        {
            name: "Marketing",
            id: "__3"
        },
        {
            name: "Landing Pages",
            id: "__4"
        },
        {
            name: "Wedding",
            id: "__5"
        },
        {
            name: "Mobile App",
            id: "__6"
        },
        {
            name: "House Construction",
            id: "__7"
        },
    ];

const Wrapper = styled.div`
  width: 219px;
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
        <List title={"My Projects"} list={projects}/>
    </Wrapper>
}

export default SideBar;