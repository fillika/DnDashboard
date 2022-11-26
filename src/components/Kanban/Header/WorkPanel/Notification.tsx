import React from "react";
import BellNotificationIcon from "../../../Icons/BellNotification";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  margin-right: 22px;
  cursor: pointer;
`;

const Counter = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  line-height: 10px;
  background-color: #F21247;
  color: #fff;
  border: 1px solid #FFFFFF;
  border-radius: 4px;
  width: 24px;
  height: 20px;
  right: -14px;
  top: -9px;
`

const Notification: React.FC = () => {
    return <Wrapper>
        <BellNotificationIcon color="#8C939F"/>
        <Counter>
            <span>99+</span>
        </Counter>
    </Wrapper>
}

export default Notification;