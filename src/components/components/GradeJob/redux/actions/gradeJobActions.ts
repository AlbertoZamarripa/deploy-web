import { ApiCallAction } from "../../../../../redux/entities";

import { IListStudents, IUpdateStudent } from "../../entities";

/**
 * LIST
 */
export type ListStudentRequest = ApiCallAction;
export interface ListStudentRequestSuccess extends ApiCallAction {
  students: IListStudents[];
}
export type ListStudentRequestFail = ApiCallAction;

/**
 * UPDATE
 */

export type UpdateCalificationsRequest = ApiCallAction;
export interface UpdateCalificationsRequestSuccess extends ApiCallAction {
  student: IUpdateStudent;
}

export type UpdateCalificationsRequestFail = ApiCallAction;

/**
 * Edit
 */

export interface EditStartCalification extends ApiCallAction {
  student: IUpdateStudent;
}
export type GradeJobActions = ListStudentRequest &
  ListStudentRequestSuccess &
  ListStudentRequestFail &
  UpdateCalificationsRequest &
  UpdateCalificationsRequestSuccess &
  UpdateCalificationsRequestFail &
  EditStartCalification;
