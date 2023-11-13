import styled from "styled-components";
import { Colors } from "../../../constants/colors.constant";

export const Login = styled.div`
  display: flex;
  height: 70vh;
  justify-content: space-between;
  align-items: center;
  border-radius: 26px;
  background-color: white;
  box-shadow: 0px 0px 36.3px 0px rgba(0, 0, 0, 0.1);
  padding: 40px;
`;

export const ImageBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const Line = styled.div`
  border-left: 3px solid rgba(196, 196, 196, 0.1);
  height: 90%;
  border-radius: 10px;
`;

export const Img = styled.img`
  width: 70%;
`;

export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  width: 50%;
  padding: 0px 30px;
  @media screen and (max-width: 965px) {
    width: 50%;
  }
  @media screen and (max-width: 680px) {
    width: 75%;
  }
`;

export const Title = styled.div`
  display: flex;
  font-weight: 600;
  font-size: 25px;
  padding-bottom: 40px;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SignCnt = styled.div`
  display: flex;
  float: left;
  position: relative;
  top: 60px;
  left: 25%;
`;
export const SignMent = styled.span`
  color: ${Colors.gray500};
  font-size: 13px;
`;
export const SignBtn = styled.span`
  color: ${Colors.mainBlue};
  font-size: 13px;
  padding-left: 8px;
`;
