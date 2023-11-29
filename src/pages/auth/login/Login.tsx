import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import { loginUser, getGoogleAuthLink } from "../../../apis/auth";
import * as S from "./Login.style";
import { Storage } from "../../../lib/storage";
import { GOOGLE_AUTH_LINK } from "../../../constants/key/auth.key";
import { ACCESS_KEY, REFRESH_KEY } from "../../../constants/user/auth.constant";
import { Input } from "../../../components/shared/common/Input/Input";
import { AuthBtn } from "../../../components/shared/common/AuthBtn/AuthBtn";
import { LinkStyle } from "../../../components/shared/common/LinkStyle/LinkStyle";
import { LOGIN_AUTH } from "../../../components/types/auth.type";
export const Login = () => {
  const navigate = useNavigate();
  const { data } = useQuery([GOOGLE_AUTH_LINK], getGoogleAuthLink);
  const [request, setRequest] = useState<LOGIN_AUTH>({
    email: "",
    password: "",
  });

  const { mutate } = useMutation(loginUser, {
    onSuccess: (data) => {
      Storage.setItem(ACCESS_KEY, data.accessToken);
      Storage.setItem(REFRESH_KEY, data.refreshToken);

      if (!data?.login) {
        navigate("/home");
      } else {
        navigate("/");
      }
      alert("Login successful!");
    },
    onError: () => {},
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRequest({
      ...request,
      [e.target.name]: e.target.value,
    });
  };

  const login = () => {
    mutate({
      email: request.email,
      password: request.password,
    });
    console.log(mutate);
  };

  return (
    <S.Login>
      <S.ImageBox>
        <S.Img src="assets/loginImage.png" />
      </S.ImageBox>
      <S.Line />
      <S.LoginBox>
        <S.Title>Hello!</S.Title>
        <S.InputBox>
          <Input onChange={handleChange} name="email" label="Email Address" />
          <Input
            onChange={handleChange}
            name="password"
            type="password"
            label="Password"
          />
        </S.InputBox>
        <S.InputBox>
          <AuthBtn value={"Sign in"} onClick={login} />
        </S.InputBox>
        <S.Link onClick={() => window.location.replace(data)}>
          Log in with your Google account.
        </S.Link>
        <S.SignCnt>
          <S.SignMent>Don’t have an account?</S.SignMent>
          <LinkStyle name="Sign Up" link="/signup" />
        </S.SignCnt>
      </S.LoginBox>
    </S.Login>
  );
};
