// Login
export interface LoginParamsI {
  username?: string;
  password?: string;
}

export interface LoginResponseI {
  message: string;
  token: string;
}

// Register
export interface RegisterParamsI {
  email: string;
  username: string;
  displayName: string;
  password: string;
}

export interface RegisterResponseI {}
