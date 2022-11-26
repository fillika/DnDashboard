import React from "react";
import styled from "styled-components";

type Props = {
    className?: string,
    children: JSX.Element,
}

const Wrapper = styled.button`
  padding: 0 20px;
  height: 40px;
  background-color: #F5F8FA;
  border-radius: 50px;
  cursor: pointer;
  transition: 255ms ease-out background-color;

  :hover {
    transition: 155ms linear background-color;
    background-color: rgba(215, 222, 228, 0.5)
  }
`

const Button: React.FC<Props> = ({ className, children }) => {
    return <Wrapper className={className}>{children}</Wrapper>
}

export default Button;