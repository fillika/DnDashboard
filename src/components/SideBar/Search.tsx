import styled from "styled-components";
import searchIcon from "../../images/search.svg";

const Wrapper = styled.div`
  position: relative;
`

const Input = styled.input`
  height: 32px;
  width: 100%;
  padding: 9px 10px;
  background: #2D4071;
  border-radius: 4px;
  outline: none;
  color: #fff;

  ::placeholder {
    color: #8C939F;
  }
`

const SearchIcon = styled.div`
  position: absolute;
  right: 8px;
  top: 8px;
  width: 16px;
  height: 16px;
  cursor: pointer;
  
  :active {
    width: 15px;
    height: 15px;
  }
  
  img {
    width: 100%;
  }
`

const Search = () => {
    return <Wrapper>
        <Input type="text" placeholder="Search..."/>
        <SearchIcon>
            <img src={searchIcon} alt="Search icon"/>
        </SearchIcon>
    </Wrapper>
}

export default Search;