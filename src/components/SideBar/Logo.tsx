import logo from "../../images/bordio-logo.svg";
import styled from "styled-components";

const LogoWrapper = styled.div`
  width: 131px;
  height: 32px;
  margin-bottom: 26px;

  img {
    width: 100%;
  }
`

const Logo = () => {
    return <div>
        <LogoWrapper>
            <a href="#main">
                <img src={logo} alt="Bordio logo"/>
            </a>
        </LogoWrapper>
    </div>
}

export default Logo;