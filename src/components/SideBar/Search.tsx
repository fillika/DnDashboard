import styled from "styled-components";
import SearchIcon from "../Icons/Search";

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 19px;
  background-color: #2D4071;
  border-radius: 4px;
`

const Input = styled.input`
  height: 32px;
  width: 100%;
  padding: 9px 10px;
  outline: none;
  color: #fff;

  ::placeholder {
    color: #8C939F;
  }
`

const SearchIconWrapper = styled.div`
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
`

const Search = () => {
    return <Wrapper>
        <Input type="text" placeholder="Search..."/>
        <SearchIconWrapper>
            <SearchIcon color={"#8C939F"}/>
        </SearchIconWrapper>
    </Wrapper>
}

export default Search;