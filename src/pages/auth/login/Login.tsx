import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "react-query";
import * as S from "./Login.style";
import { Input } from "../../../components/shared/common/Input/Input";
import { AuthBtn } from "../../../components/shared/common/AuthBtn/AuthBtn";

export const Login = () => {
  const navigate = useNavigate();
  return (
    <S.Login>
      <S.ImageBox>
        <S.Img src="assets/loginImage.png" />
      </S.ImageBox>
      <S.Line />
      <S.LoginBox>
        <S.Title>Hello!</S.Title>
        <S.InputBox>
          <Input
            // onChange={handleChange}
            name="Email Address"
          />
          <Input
            // onChange={handleChange}
            name="Password"
          />
        </S.InputBox>
        <S.InputBox>
          <AuthBtn value={"Sign in"} />
        </S.InputBox>
        <S.SignCnt>
          <S.SignMent>Don’t have an account?</S.SignMent>
          <S.SignBtn>Sign up</S.SignBtn>
        </S.SignCnt>
      </S.LoginBox>
    </S.Login>
  );
};
