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
export type AsistActions = ListAsistRequest &
  ListAsistRequestSuccess &
  ListAsistRequestError &
  UpdateAsistRequest &
  UpdateAsistRequestSuccess &
  UpdateAsistRequestFail;
