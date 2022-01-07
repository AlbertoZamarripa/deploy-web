import { ApiCallAction, User } from "../entities";

export type UserLoginRequest = ApiCallAction;

export interface UserLoginRequestSuccess extends ApiCallAction {
  user: User;
}

export interface UserLoginRequestError extends ApiCallAction {}

export interface UserLoginRequestLogout {}
export type AuthActions = UserLoginRequest &
  UserLoginRequestSuccess &
  UserLoginRequestError &
  UserLoginRequestLogout;
