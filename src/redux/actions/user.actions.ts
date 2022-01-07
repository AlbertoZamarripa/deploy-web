import { ApiCallAction, IRegister, User } from "../entities";

/**
 * User List
 */

export type UserRequest = ApiCallAction;

export interface UserRequestSuccess extends ApiCallAction {
  user: User[];
}

export type UserRequestError = ApiCallAction;

/**
 * Register user
 */

export interface UserEditInfo {
  user: User;
}
export interface UserRegisterRequest extends ApiCallAction {
  user: IRegister;
}

export interface UserRegisterRequestSuccess extends ApiCallAction {
  user: IRegister;
}

export type UserRegisterRequestError = ApiCallAction;

/**
 * Edit user
 */

export interface UserUpdateInfo {
  user: User;
}
export interface UserUpdateRequest extends ApiCallAction {
  user: User;
}

export interface UserUpdateRequestSuccess extends ApiCallAction {
  user: User;
}

export type UserUpdateRequestError = ApiCallAction;

/**
 * Delete
 */

export type UserDeleteRequest = ApiCallAction;

export interface UserDeleteRequestSuccess extends ApiCallAction {
  id: string;
}

export type UserActions = UserRequest &
  UserRequestSuccess &
  UserRequestError &
  UserEditInfo &
  UserRegisterRequest &
  UserRegisterRequestSuccess &
  UserRegisterRequestError &
  UserUpdateInfo &
  UserUpdateRequest &
  UserUpdateRequestSuccess &
  UserUpdateRequestError &
  UserDeleteRequest &
  UserDeleteRequestSuccess;
