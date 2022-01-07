import { ApiCallAction } from "../../../../../redux/entities";
import { ICourse } from "../../../courses/entities";
import {
  ICourseSelected,
  IDeleteStudent,
  IStudents,
  IUpdateStudent,
} from "../../entities";
import { StudentTypes } from "./studentActionTypes";

/**
 *
 * List courses
 */

export type CourseRequest = ApiCallAction;
export interface CourseRequestSuccess extends ApiCallAction {
  courses: ICourse[];
}
export type CourseRequestError = ApiCallAction;

/**
 * List students
 */
export type GetStudentsRequest = ApiCallAction;
export interface GetStudentsRequestSuccess extends ApiCallAction {
  students: IStudents[];
}

export type GetStudentsRequestFail = ApiCallAction;

/**
 * Update
 */

export type StudentUpdateRequest = ApiCallAction;
export interface StudentUpdateRequestSuccess extends ApiCallAction {
  student: IUpdateStudent;
}
export type StudentUpdateRequestFail = ApiCallAction;

/**
 * eDIT
 */
export interface StudentEditInfo extends ApiCallAction {
  student: IStudents;
}

export interface SelectedCourse extends ApiCallAction {
  course: ICourseSelected;
}

/**
 * DELETE
 */

export type DeleteStudentRequest = ApiCallAction;
export interface DeleteStudentRequestSuccess extends ApiCallAction {
  id: string;
}
export type DeleteStudentRequestFail = ApiCallAction;
export type StudentsActions = GetStudentsRequest &
  GetStudentsRequestSuccess &
  GetStudentsRequestFail &
  StudentUpdateRequest &
  StudentUpdateRequestSuccess &
  StudentUpdateRequestFail &
  StudentEditInfo &
  SelectedCourse &
  DeleteStudentRequest &
  DeleteStudentRequestSuccess &
  DeleteStudentRequestFail;
