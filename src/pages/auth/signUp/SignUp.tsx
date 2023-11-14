import * as S from "./SignUp.style";
import { Input } from "../../../components/shared/common/Input/Input";
import { AuthBtn } from "../../../components/shared/common/AuthBtn/AuthBtn";
import { LinkStyle } from "../../../components/shared/common/LinkStyle/LinkStyle";
export const SignUp = () => {
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
          />
          <Input
            // onChange={handleChange}
            name="Repeat Password"
          />
        </S.InputBox>
        <S.InputBox>
          <AuthBtn value={"Sign up"} />
        </S.InputBox>
      </S.SignBox>
    </S.SignUp>
  );
};
