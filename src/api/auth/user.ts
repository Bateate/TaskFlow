import { LoginParamsI, LoginResponseI, RegisterParamsI, RegisterResponseI } from "../../utils/interfaces/req-res.interface";
import { onFetch } from "../../utils/onFetch";

const authBaseUri = "http://localhost:3001/api/user";

export const loginUserRequest = async (body?: LoginParamsI) => {
  const reqParams = {
    url: `${authBaseUri}/login`,
    method: "POST",
    body: body,
  };
  const res = await onFetch<LoginResponseI>(reqParams);
  return await res;
};

export const createUserRequest = async (body: RegisterParamsI) => {
  const reqParams = {
    url: `${authBaseUri}/register`,
    method: "POST",
    body: body,
  };
  const res = await onFetch<RegisterResponseI>(reqParams);
  return await res;
};
