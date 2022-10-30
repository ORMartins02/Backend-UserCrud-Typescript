export interface IUserRequest {
  id: string;
  name: string;
  email: string;
  isAdm: boolean;
  isActive: boolean;
  password: string;
}

export interface IUserRequestUpdate {
  name: string | undefined;
  email: string | undefined;
  password: string | undefined;
}

export interface IUserLogin {
  email: string;
  password: string;
}
