import * as S from "./UpdatePassword.style";
import { Input } from "../../../components/shared/common/Input/Input";
import { AuthBtn } from "../../../components/shared/common/AuthBtn/AuthBtn";
import { LinkStyle } from "../../../components/shared/common/LinkStyle/LinkStyle";

export const UpdatePassword = () => {
  return (
    <S.UpdatePassword>
      <S.MentBox>
        <S.Describe>
          Did you forget your password?
          <br />
          Please set a new password here.
        </S.Describe>
        <S.LoginBox>
          <S.Describe>Use the original password</S.Describe>
          <S.LoginBtn>
            <LinkStyle name="Sign in" link="/" />
          </S.LoginBtn>
        </S.LoginBox>
      </S.MentBox>
      <S.Line />
      <S.UpdateBox>
        <S.Title>Change Password</S.Title>
        <S.InputBox>
          <Input name="email" label="Email Address" />
          <Input name="password" type="password" label="Old Password" />
          <Input name="newpassword" type="password" label="New Password" />
        </S.InputBox>
        <S.InputBox>
          <AuthBtn value={"Change Password"} />
        </S.InputBox>
      </S.UpdateBox>
    </S.UpdatePassword>
  );
};
