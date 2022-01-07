import { ICourse } from "../../entities";
import {
  CourseDeleteFail,
  CourseDeleteRequest,
  CourseDeleteRequestSucces,
  CourseRegisterFail,
  CourseRegisterRequest,
  CourseRegisterSuccess,
  CourseRequest,
  CourseRequestError,
  CourseRequestSuccess,
  CourseUpdateFail,
  CourseUpdateRequest,
  CourseUpdateSuccess,
} from "./curseActions";
import { CourseTypes } from "./curseActionTypes";

export const courseRequest = (): CourseRequest => ({
  type: CourseTypes.COURSE_ALL_REQUEST,
});

export const courseRequestSuccess = (
  courses: ICourse[]
): CourseRequestSuccess => ({
  type: CourseTypes.COURSE_ALL_REQUEST_SUCCESS,
  courses,
});

export const courseRequestFail = (error: Error): CourseRequestError => ({
  type: CourseTypes.COURSE_ALL_REQUEST_FAIL,
  error,
});

/**
 * Edit
 */

export const courseEditStart = (course: ICourse) => ({
  type: CourseTypes.COURSE_EDIT,
  course,
});

/**
 * DELETE
 */

export const courseDeleteRequest = (): CourseDeleteRequest => ({
  type: CourseTypes.COURSE_DELETE_REQUEST,
});

export const courseDeleteSuccess = (id: string): CourseDeleteRequestSucces => ({
  type: CourseTypes.COURSE_DELETE_REQUEST_SUCCESS,
  id,
});

export const courseDeleteFail = (error: Error): CourseDeleteFail => ({
  type: CourseTypes.COURSE_DELETE_REQUEST_FAIL,
  error,
});

/**
 * Register
 */

export const courseRegisterRequest = (): CourseRegisterRequest => ({
  type: CourseTypes.COURSE_REGISTER_REQUEST,
});

export const courseRegisterRequestSuccess = (
  course: ICourse
): CourseRegisterSuccess => ({
  type: CourseTypes.COURSE_REGISTER_REQUEST_SUCCESS,
  course,
});

export const courseRegisterRequestFail = (
  error: Error
): CourseRegisterFail => ({
  type: CourseTypes.COURSE_REGISTER_REQUEST_FAIL,
  error,
});

/**
 * update
 */

export const courseUpdateRequest = (): CourseUpdateRequest => ({
  type: CourseTypes.COURSE_UPDATE_REQUEST,
});
export const courseUpdateRequestSuccess = (
  course: ICourse
): CourseUpdateSuccess => ({
  type: CourseTypes.COURSE_UPDATE_REQUEST_SUCCESS,
  course,
});
export const courseUpdateRequestFail = (error: Error): CourseUpdateFail => ({
  type: CourseTypes.COURSE_UPDATE_REQUEST_FAIL,
  error,
});
