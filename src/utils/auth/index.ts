import server from "../../apis/client/index";
import { ACCESS_KEY, REFRESH_KEY } from "../../constants/user/auth.constant";
import { Storage } from "../../lib/storage";

export const accessTokenExpired = async () => {
  try {
    const { data } = await server.put("/token", null, {
      headers: {
        "Refresh-Token": Storage.getItem(REFRESH_KEY),
      },
    });
    Storage.setItem(ACCESS_KEY, data.accessToken);
  } catch {
    alert("The accounts do not match.");
    window.location.href = "/";
    localStorage.clear();
  }
};

export const authorization = () => {
  return {
    headers: {
      Authorization: `Bearer ${Storage.getItem(ACCESS_KEY)}`,
    },
  };
};
