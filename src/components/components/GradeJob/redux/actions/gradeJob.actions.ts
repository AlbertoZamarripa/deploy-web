import { IListStudents, IUpdateStudent } from "../../entities";
import {
  ListStudentRequest,
  ListStudentRequestFail,
  ListStudentRequestSuccess,
  UpdateCalificationsRequest,
  UpdateCalificationsRequestFail,
  UpdateCalificationsRequestSuccess,
} from "./gradeJobActions";
import { GradeJobTypes } from "./gradeJobActionTypes";

export const listStudentRequest = (): ListStudentRequest => ({
  type: GradeJobTypes.LIST_STUDENTS_REQUEST,
});

export const listStudentRequestSuccess = (
  students: IListStudents[]
): ListStudentRequestSuccess => ({
  type: GradeJobTypes.LIST_STUDENTS_REQUEST_SUCCESS,
  students,
});

export const listStudentRequestFail = (
  error: Error
): ListStudentRequestFail => ({
  type: GradeJobTypes.LIST_STUDENTS_REQUEST_FAIL,
  error,
});

export const editStartStudent = (student: IUpdateStudent) => ({
  type: GradeJobTypes.EDIT_UPDATE_CALIFICATION,
  student,
});

/**
 * UPDATE
 */
export const updateStudentRequest = (): UpdateCalificationsRequest => ({
  type: GradeJobTypes.UPDATE_CALIFICATION_STUDENT,
});
export const updateStudentSuccess = (
  student: IUpdateStudent
): UpdateCalificationsRequestSuccess => ({
  type: GradeJobTypes.UPDATE_CALIFICATION_STUDENT_SUCCESS,
  student,
});

export const updateStudentFail = (
  error: Error
): UpdateCalificationsRequestFail => ({
  type: GradeJobTypes.UPDATE_CALIFICATION_STUDENT_FAIL,
  error,
});
