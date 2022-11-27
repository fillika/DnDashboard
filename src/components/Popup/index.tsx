import React from "react";
import styled, { keyframes } from "styled-components";

type Props = {
    children: JSX.Element;
    isActive: boolean;
}

const appearAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10%);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const Wrapper = styled.div`
  position: absolute;
  background-color: #fff;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  padding: 6px;
  top: calc(100% + 8px);
  animation: 155ms ease-in ${appearAnimation};
  z-index: 1000;
`

const Popup: React.FC<Props> = ({ children, isActive }) => {
    return isActive ?  <Wrapper>{children}</Wrapper> : null;
}

export default Popup;