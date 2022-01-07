import { ApiCallAction } from "../../../../../redux/entities";
import { IHomeworks } from "../../entities";

export type HomeworkRequest = ApiCallAction;
export interface HomeworkRequestSuccess extends ApiCallAction {
  homeworks: IHomeworks[];
}
export type HomeworkRequestFail = ApiCallAction;

/**
 * Register
 */

export type HomeworkRegister = ApiCallAction;
export interface HomeworkRegisterSuccess extends ApiCallAction {
  homework: IHomeworks;
}
export type HomeworkRegisterFail = ApiCallAction;

/**EDIT */
export interface HomeworkStartEdit extends ApiCallAction {
  homework: IHomeworks;
}

/**
 * UPDATE
 */
export type HomeworkUpdateRequest = ApiCallAction;
export interface HomeworkUpdateRequestSuccess extends ApiCallAction {
  homework: IHomeworks;
}
export type HomeworkUpdateFail = ApiCallAction;

/**
 * DELETE
 */

export type HomeworkDeleteRequest = ApiCallAction;
export interface HomeworkDeleteRequestSuccess extends ApiCallAction {
  id: string;
}
export type HomeworkDeleteRequestFail = ApiCallAction;
export type HomeworkActions = HomeworkRequest &
  HomeworkRequestSuccess &
  HomeworkRequestFail &
  HomeworkRegister &
  HomeworkRegisterSuccess &
  HomeworkRegisterFail &
  HomeworkUpdateRequest &
  HomeworkUpdateRequestSuccess &
  HomeworkUpdateFail &
  HomeworkDeleteRequest &
  HomeworkDeleteRequestSuccess &
  HomeworkDeleteRequestFail;
