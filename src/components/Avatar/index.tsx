import React from "react";
import avatar from "../../images/avatar.png";
import styled from "styled-components";

const ImageWrapper = styled.div`
  overflow: hidden;
  width: 22px;
  height: 22px;
  border-radius: 50%;

  img {
    width: 100%;
  }
`

const Avatar: React.FC<{ className?: string }> = ({ className }) => {
    return <ImageWrapper className={className}>
        <img src={avatar} alt="User avatar"/>
    </ImageWrapper>
}

export default Avatar;