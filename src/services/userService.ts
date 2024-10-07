import { createUserRequest, loginUserRequest } from "../api/auth/user";
import { LoginParamsI, RegisterParamsI } from "../utils/interfaces/req-res.interface";


export const authenticateUser = async (params: LoginParamsI) => {
  const response = await loginUserRequest(params);

  if (response.data) {
    localStorage.setItem("_auth", response.data.token);
  }

  return response;
};

export const registerUser = async (params: RegisterParamsI) => {
  const response = await createUserRequest(params);
  return response;
};
