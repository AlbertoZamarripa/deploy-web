import { ApiCallAction } from "../../../../../redux/entities";
import { ICourse, INewCourse, IUpdateCourse } from "../../entities";

/**
 * LIST COURSES
 */
export type CourseRequest = ApiCallAction;
export interface CourseRequestSuccess extends ApiCallAction {
  courses: ICourse[];
}
export type CourseRequestError = ApiCallAction;

/**
 * edit
 */
export interface CourseUpdateInfo extends ApiCallAction {
  course: ICourse;
}

/**
 * Delete
 */

export type CourseDeleteRequest = ApiCallAction;
export interface CourseDeleteRequestSucces extends ApiCallAction {
  id: string;
}
export type CourseDeleteFail = ApiCallAction;

/**
 * REGISTER
 */

export type CourseRegisterRequest = ApiCallAction;
export interface CourseRegisterSuccess extends ApiCallAction {
  course: ICourse;
}
export type CourseRegisterFail = ApiCallAction;
/**
 * UPDATE
 */

export type CourseUpdateRequest = ApiCallAction;
export interface CourseUpdateSuccess extends ApiCallAction {
  course: ICourse;
}
export type CourseUpdateFail = ApiCallAction;
export type CourseActions = CourseRequest &
  CourseRequestSuccess &
  CourseRequestError &
  CourseUpdateInfo &
  CourseDeleteRequest &
  CourseDeleteRequestSucces &
  CourseDeleteFail &
  CourseRegisterRequest &
  CourseRegisterSuccess &
  CourseRegisterFail &
  CourseUpdateRequest &
  CourseUpdateSuccess &
  CourseUpdateFail;
