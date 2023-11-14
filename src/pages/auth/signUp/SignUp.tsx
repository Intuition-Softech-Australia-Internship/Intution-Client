import * as S from "./SignUp.style";
import { Input } from "../../../components/shared/common/Input/Input";
import { AuthBtn } from "../../../components/shared/common/AuthBtn/AuthBtn";
import { LinkStyle } from "../../../components/shared/common/LinkStyle/LinkStyle";
import React, { useState } from "react";

// const [userData, setUserData] = useState({
//   id: "",
//   passwd: "",
//   passwdCheck: "",
//   name: "",
// });

export const SignUp = () => {
//   const [userData, setUserData] = useState({
//     passwd: "",
//     passwdCheck: "",
//   });
//   const { passwd, passwdCheck } = userData;

//   // 비밀번호와 비밀번호 확인 같은지 체크하기
//   const isSame = passwd === passwdCheck;

  // input에 모든 입력값이 다 입력되었는지 체크하기
  // const isValid = id !== '' && isSame === true && name !== '';

  return (
    <S.SignUp>
      <S.MentBox>
        <S.Title>Sign Up</S.Title>
        <S.Describe>
          Please enter your details to sign up <br />
          and be part of out great community.
        </S.Describe>
        <S.LoginBox>
          <S.Describe>Already have a account?</S.Describe>
          <S.LoginBtn>
            <LinkStyle name="Sign in" link="/" />
          </S.LoginBtn>
        </S.LoginBox>
      </S.MentBox>
      <S.Line />
      <S.SignBox>
        <S.InputBox>
          <Input
            // onChange={handleChange}
            name="First Name"
          />
          <Input
            // onChange={handleChange}
            name="Last Name"
          />
          <Input
            // onChange={handleChange}
            name="Email Address"
          />
          <Input
            // onChange={handleChange}
            name="Password"
            type="password"
            // value={passwd}
          />
          <Input
            // onChange={handleChange}
            name="Repeat Password"
            type="password"
            // value={passwdCheck}
          />
        </S.InputBox>
        <S.InputBox>
          <AuthBtn value={"Sign up"} />
        </S.InputBox>
      </S.SignBox>
    </S.SignUp>
  );
};
