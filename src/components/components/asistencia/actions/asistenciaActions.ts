import { ApiCallAction } from "../../../../redux/entities";
import { IListAsistStudents } from "../entities";
export type ListAsistRequest = ApiCallAction;
export interface ListAsistRequestSuccess extends ApiCallAction {
  students: IListAsistStudents[];
}
export type ListAsistRequestError = ApiCallAction;

export type UpdateAsistRequest = ApiCallAction;
export interface UpdateAsistRequestSuccess extends ApiCallAction {
  students: IListAsistStudents[];
}
export type UpdateAsistRequestFail = ApiCallAction;

export type ListAllAsistRequest = ApiCallAction;
export interface ListAllAsistRequestSuccess extends ApiCallAction {
  students: any;
}
export type ListAllAsistRequestFail = ApiCallAction;
export type AsistActions = ListAsistRequest &
  ListAsistRequestSuccess &
  ListAsistRequestError &
  UpdateAsistRequest &
  UpdateAsistRequestSuccess &
  UpdateAsistRequestFail &
  ListAllAsistRequest &
  ListAllAsistRequestSuccess &
  ListAllAsistRequestFail;
