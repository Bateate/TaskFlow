import { onFetch } from "../../utils/onFetch";
import * as authI from "../../utils/interfaces/auth.interface";

const authBaseUri = "http://localhost:3001/api/user";

export const loginUser = async (body?: authI.LoginParamsI) => {
  const reqParams = {
    url: `${authBaseUri}/login`,
    method: "POST",
    body: body,
  };
  const res = await onFetch<authI.LoginResponseI>(reqParams);
  return await res;
};

export const createUser = async (body: authI.RegisterParamsI) => {
  const reqParams = {
    url: `${authBaseUri}/register`,
    method: "POST",
    body: body,
  };
  const res = await onFetch<authI.RegisterResponseI>(reqParams);
  return await res;
};
