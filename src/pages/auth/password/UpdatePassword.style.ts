import styled from "styled-components";
import { Colors } from "../../../constants/colors.constant";

export const UpdatePassword = styled.div`
  display: flex;
  height: 70vh;
  justify-content: space-between;
  align-items: center;
  border-radius: 23px;
  background-color: white;
  box-shadow: 0px 0px 36.3px 0px rgba(0, 0, 0, 0.1);
  padding: 40px;
`;

export const MentBox = styled.div`
text-align: center;
  width: 50%;
`;

export const Line = styled.div`
  border-left: 3px solid rgba(196, 196, 196, 0.1);
  height: 90%;
  border-radius: 10px;
`;

export const UpdateBox = styled.div`
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

export const Title = styled.p`
  font-weight: 600;
  font-size: 25px;
`;


export const LoginBtn = styled.p`
  position: relative;
  top: 10px;
  color: ${Colors.mainBlue};
  font-size: 13px;
  width: 3.5vw;
  margin: auto;
`;

export const LoginBox = styled.div`
  padding-top: 30px;
`;
export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`;

export const Describe = styled.p`
  color: ${Colors.gray600};
  padding-top: 30px;
`;
