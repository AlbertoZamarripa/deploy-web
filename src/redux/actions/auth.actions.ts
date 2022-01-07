import { User, UserLogin } from "../entities";
import {
  UserLoginRequest,
  UserLoginRequestError,
  UserLoginRequestLogout,
  UserLoginRequestSuccess,
} from "./authActions";
import { AuthType } from "./generalActionTypes";

export const loginRequest = (user: UserLogin): UserLoginRequest => ({
  type: AuthType.LOGIN_REQUEST,
});

export const loginRequestSuccess = (user: User): UserLoginRequestSuccess => ({
  type: AuthType.LOGIN_SUCCESS,
  user,
});

export const loginRequestError = (error: Error): UserLoginRequestError => ({
  type: AuthType.LOGIN_FAIL,
  error,
});

export const loginRequestLogout = (): UserLoginRequestLogout => ({
  type: AuthType.LOGOUT,
});
