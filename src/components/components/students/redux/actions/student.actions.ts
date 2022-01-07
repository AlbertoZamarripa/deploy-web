import { ICourse } from "../../../courses/entities";
import {
  ICourseSelected,
  IDeleteStudent,
  IStudents,
  IUpdateStudent,
} from "../../entities";
import {
  CourseRequest,
  CourseRequestError,
  CourseRequestSuccess,
  DeleteStudentRequest,
  DeleteStudentRequestFail,
  DeleteStudentRequestSuccess,
  GetStudentsRequest,
  GetStudentsRequestFail,
  GetStudentsRequestSuccess,
  StudentUpdateRequest,
  StudentUpdateRequestFail,
  StudentUpdateRequestSuccess,
} from "./studentActions";
import { StudentTypes } from "./studentActionTypes";

export const courseRequest = (): CourseRequest => ({
  type: StudentTypes.COURSE_ALL_REQUEST,
});

export const courseRequestSuccess = (
  courses: ICourse[]
): CourseRequestSuccess => ({
  type: StudentTypes.COURSE_ALL_REQUEST_SUCCESS,
  courses,
});

export const courseRequestFail = (error: Error): CourseRequestError => ({
  type: StudentTypes.COURSE_ALL_REQUEST_FAIL,
  error,
});

/**
 *
 * LIST students
 */
export const studentsRequest = (): GetStudentsRequest => ({
  type: StudentTypes.GET_STUDENTS_REQUEST,
});

export const studentsRequestSuccess = (
  students: IStudents[]
): GetStudentsRequestSuccess => ({
  type: StudentTypes.GET_STUDENTS_REQUEST_SUCCESS,
  students,
});

export const studentRequestFail = (error: Error): GetStudentsRequestFail => ({
  type: StudentTypes.GET_STUDENTS_REQUEST_FAIL,
  error,
});
/**
 * Update
 */
export const studentUpdateRequest = (): StudentUpdateRequest => ({
  type: StudentTypes.UPDATE_STUDETS_REQUEST,
});

export const studentUpdateRequestSuccess = (
  student: IUpdateStudent
): StudentUpdateRequestSuccess => ({
  type: StudentTypes.UPDATE_STUDETS_REQUEST_SUCCESS,
  student,
});

export const studentUpdateRequestFail = (
  error: Error
): StudentUpdateRequestFail => ({
  type: StudentTypes.UPDATE_STUDETS_REQUEST_FAIL,
  error,
});

/**
 * Edit
 */

export const studentEditStart = (student: IStudents) => ({
  type: StudentTypes.EDIT_STUDENT,
  student,
});

export const selectedCourse = (course: ICourseSelected) => ({
  type: StudentTypes.SELECTED_COURSE,
  course,
});

/**
 * Delete
 */
export const deleteStudentRequest = (): DeleteStudentRequest => ({
  type: StudentTypes.DELETE_STUDENT_REQUEST,
});

export const deleteStudentRequestSuccess = (
  id: string
): DeleteStudentRequestSuccess => ({
  type: StudentTypes.DELETE_STUDENT_REQUEST_SUCCESS,
  id,
});

export const deleteStudentRequestFail = (
  error: Error
): DeleteStudentRequestFail => ({
  type: StudentTypes.DELETE_STUDENT_REQUEST_FAIL,
  error,
});
