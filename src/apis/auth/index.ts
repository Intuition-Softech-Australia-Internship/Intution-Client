import { LOGIN_AUTH, USER } from "../../components/types/auth.type";
import server from "../client";

export const loginUser = async ({
  email,
  password,
}: LOGIN_AUTH): Promise<USER> => {
  return (
    await server.post("/token", {
      email: email,
      password: password,
    })
  ).data;
};
