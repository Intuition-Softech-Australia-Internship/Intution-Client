export type LOGIN_AUTH = {
  email: string;
  password: string;
};

export type USER = {
  accessToken: string;
  refreshToken: string;
  login: boolean;
};
