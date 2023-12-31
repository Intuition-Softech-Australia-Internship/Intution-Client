import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";
import { Colors } from "../../../../constants/colors.constant";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
} // 기능적인 부분 해결 및 이름도 적어야댈대..

export const Input = (props: InputProps) => {
  return (
    <InputBox>
      <InputStyle {...props} />
      <InputName>{props.label}</InputName>
    </InputBox>
  );
};

const InputStyle = styled.input`
  width: 100%;
  height: 5vh;
  padding: 0 15px;
  border: none;
  border-bottom: 1.5px solid ${Colors.gray300};
  &:focus {
    outline: none;
    border-bottom: 2px solid ${Colors.mainBlue};
    transition: all 0.5s;
  }
`;

const InputBox = styled.div`
  padding-top: 20px;
`;

const InputName = styled.label`
  color: ${Colors.gray500};
  font-size: 13px;
  position: relative;
  bottom: 60px;

  ${InputStyle}:focus ~ & {
    color: ${Colors.mainBlue};
    transition: all 1s;
  }
`;
