import React, { ButtonHTMLAttributes, InputHTMLAttributes } from "react";
import styled from "styled-components";
import { Colors } from "../../../../constants/colors.constant";

export const AuthBtn = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <BtnStyle {...props}>{props.value}</BtnStyle>;
};

const BtnStyle = styled.button`
  background-color: ${Colors.mainBlue};
  height: 48px;
  color: white;
  font-weight: 500;
  font-size: 15px;
  border: none;
  border-radius: 40px;
  &:hover{
    cursor: pointer;
  }
`;
