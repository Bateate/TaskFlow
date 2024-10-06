import { createUser, loginUser } from "../api/workspace";
import { LoginParamsI, RegisterParamsI } from "../utils/interfaces/req-res.interface";


export const authenticateUser = async (params: LoginParamsI) => {
  const response = await loginUser(params);

  if (response.data) {
    localStorage.setItem("_auth", response.data.token);
  }

  return response;
};

export const registerUser = async (params: RegisterParamsI) => {
  const response = await createUser(params);
  return response;
};
