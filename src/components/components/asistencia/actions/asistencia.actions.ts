import { IListAsistStudents } from "../entities";
import {
  ListAllAsistRequest,
  ListAllAsistRequestFail,
  ListAllAsistRequestSuccess,
  ListAsistRequest,
  ListAsistRequestError,
  ListAsistRequestSuccess,
  UpdateAsistRequest,
  UpdateAsistRequestFail,
  UpdateAsistRequestSuccess,
} from "./asistenciaActions";
import { AsistenciaTypes } from "./asistenciaTypes";

export const asistRequest = (): ListAsistRequest => ({
  type: AsistenciaTypes.LIST_ASIST_REQUEST,
});

export const asistRequestSuccess = (
  students: IListAsistStudents[]
): ListAsistRequestSuccess => ({
  type: AsistenciaTypes.LIST_ASIST_REQUEST_SUCCESS,
  students,
});

export const asistRequestError = (error: Error): ListAsistRequestError => ({
  type: AsistenciaTypes.LIST_ASIST_REQUEST_FAIL,
  error,
});

export const updateRequest = (): UpdateAsistRequest => ({
  type: AsistenciaTypes.UPDATE_STUDENT_ASIST_REQUEST,
});

export const updateRequestSuccess = (
  students: IListAsistStudents[]
): UpdateAsistRequestSuccess => ({
  type: AsistenciaTypes.UPDATE_STUDENT_ASIST_REQUEST_SUCCESS,
  students,
});

export const updateRequestFail = (error: Error): UpdateAsistRequestFail => ({
  type: AsistenciaTypes.UPDATE_STUDENT_ASIST_REQUEST_FAIL,
  error,
});

export const listAllAsistRequest = (): ListAllAsistRequest => ({
  type: AsistenciaTypes.GET_ALL_LIST_ASIST,
});

export const listAllAsistRequestSuccess = (
  students: any
): ListAllAsistRequestSuccess => ({
  type: AsistenciaTypes.GET_ALL_LIST_ASIST_SUCCESS,
  students,
});

export const listAllAsistRequestFail = (
  error: Error
): ListAllAsistRequestFail => ({
  type: AsistenciaTypes.GET_ALL_LIST_ASIST_FAIL,
  error,
});
