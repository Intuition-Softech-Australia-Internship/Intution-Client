import { LOGIN_AUTH, NEW_AUTH, RESET_REQUEST, USER } from "../../components/types/auth.type";
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

export const newUser = async ({
  username,
  email,
  password,
}: NEW_AUTH) => {
  return (
    await server.post("/users", {
      username: username,
      email: email,
      password: password,
    })
  ).data;
};


export const getGoogleAuthLink = async () => {
  return (await server.get("/auth/google")).data;
};

export const getAccessTokenByGoogle = async (code: string): Promise<RESET_REQUEST> => {
  return (await server.post(`/auth/google/callback?code=${code}`)).data;
};    
