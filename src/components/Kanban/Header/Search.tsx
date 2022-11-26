import styled from "styled-components";
import SearchIcon from "../../Icons/Search";

const Wrapper = styled.div`
  position: relative;
  background-color: #F5F8FA;
  border-radius: 50px;
  margin-right: 24px;
`

const Input = styled.input`
  height: 40px;
  width: 180px;
  padding: 12px 16px;
  outline: none;
  color: #8C939F;
  font-size: 14px;
  line-height: 16px;

  ::placeholder {
    color: #8C939F;
  }
`

const SearchIconWrapper = styled.div`
  position: absolute;
  right: 14px;
  top: 12px;
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