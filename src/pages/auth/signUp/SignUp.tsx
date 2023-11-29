import * as S from "./SignUp.style";
import { Input } from "../../../components/shared/common/Input/Input";
import { AuthBtn } from "../../../components/shared/common/AuthBtn/AuthBtn";
import { LinkStyle } from "../../../components/shared/common/LinkStyle/LinkStyle";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GOOGLE_AUTH_LINK } from "../../../constants/key/auth.key";
import { NEW_AUTH } from "../../../components/types/auth.type";
import { useMutation, useQuery } from "react-query";
import { newUser, getGoogleAuthLink } from "../../../apis/auth";

export const SignUp = () => {
  const { data } = useQuery([GOOGLE_AUTH_LINK], getGoogleAuthLink);

  const navigate = useNavigate();

  const [request, setRequest] = useState<NEW_AUTH>({
    username: "",
    email: "",
    password: "",
  });

  const { mutate } = useMutation(newUser, {
    onSuccess: (data) => {
      alert(
        "Your registration has been successfully completed. Now, please log in to access our services.!"
      );
      navigate("/");
    },
    onError: () => {
      alert(
        "Please ensure that all required fields are filled in correctly and try again."
      );
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRequest({
      ...request,
      [e.target.name]: e.target.value,
    });
  };

  const create = () => {
    mutate({
      username: request.username,
      email: request.email,
      password: request.password,
    });
  };

  return (
    <S.SignUp>
      <S.MentBox>
        <S.Title>Sign Up</S.Title>
        <S.Describe>
          Please enter your details to sign up <br />
          and be part of out great community.
        </S.Describe>
        <S.Link onClick={() => window.location.replace(data)}>
          Create a Google Account
        </S.Link>
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
          <Input onChange={handleChange} name="username" label="First name" />
          <Input onChange={handleChange} name="username" label="Last name" />
          <Input onChange={handleChange} name="email" label="Email Address" />
          <Input
            onChange={handleChange}
            name="password"
            type="password"
            label="Password"
          />
          <Input
            name="reapeatPassword"
            label="Reapeat Password"
            type="password"
          />
        </S.InputBox>
        <S.InputBox>
          <AuthBtn value={"Sign up"} onClick={create} />
        </S.InputBox>
      </S.SignBox>
    </S.SignUp>
  );
};
