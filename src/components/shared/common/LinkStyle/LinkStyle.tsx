import React, { ButtonHTMLAttributes, InputHTMLAttributes } from "react";
import styled from "styled-components";
import { Colors } from "../../../../constants/colors.constant";
import { Link } from "react-router-dom";
type LinkProps = {
  name: string;
  link: string;
};

export const LinkStyle = ({ name, link }: LinkProps) => {
  console.log(name, link);
  return (
    <SignBtn>
      <Link to={link}>{name}</Link>
    </SignBtn>
  );
};

export const SignBtn = styled.p`
  color: ${Colors.mainBlue};
  font-size: 13px;
  padding-left: 8px;
  :after {
    display: block;
    content: "";
    padding-top: 2px;
    border-bottom: solid 1px ${Colors.mainBlue};
    transform: scaleX(0);
    transition: transform 250ms ease-in-out
  }
  :hover:after {
    transform: scaleX(1);
  }
`;
