import { IHomeworks } from "../../entities";
import {
  HomeworkDeleteRequest,
  HomeworkDeleteRequestFail,
  HomeworkDeleteRequestSuccess,
  HomeworkRegister,
  HomeworkRegisterFail,
  HomeworkRegisterSuccess,
  HomeworkRequest,
  HomeworkRequestFail,
  HomeworkRequestSuccess,
  HomeworkStartEdit,
  HomeworkUpdateFail,
  HomeworkUpdateRequest,
  HomeworkUpdateRequestSuccess,
} from "./homeworkActions";
import { HomeworkTypes } from "./homeworkActionTypes";

/**
 *
 * LIST
 */

export const homeworkRequest = (): HomeworkRequest => ({
  type: HomeworkTypes.LIST_REQUEST,
});

export const homeworkRequestSuccess = (
  homeworks: IHomeworks[]
): HomeworkRequestSuccess => ({
  type: HomeworkTypes.LIST_REQUEST_SUCCESS,
  homeworks,
});

export const homeworkRequestFail = (error: Error): HomeworkRequestFail => ({
  type: HomeworkTypes.LIST_REQUEST_FAIL,
  error: error,
});
/**
 *
 * REGISTER
 */
export const homeworkRegister = (): HomeworkRegister => ({
  type: HomeworkTypes.REGISTER_HOMEWORK,
});

export const homeworkRegisterSuccess = (
  homework: IHomeworks
): HomeworkRegisterSuccess => ({
  type: HomeworkTypes.REGISTER_HOMEWORK_SUCCESS,
  homework,
});

export const homeworkRegisterFail = (error: Error): HomeworkRegisterFail => ({
  type: HomeworkTypes.REGISTER_HOMEWORK_FAIL,
  error,
});
/**
 * edit
 */

export const homeworkStartEdit = (homework: IHomeworks): HomeworkStartEdit => ({
  type: HomeworkTypes.START_EDIT,
  homework,
});
/**
 * UPDATE
 */

export const homeworkUpdateRequest = (): HomeworkUpdateRequest => ({
  type: HomeworkTypes.UPDATE_HOMEWORK_REQUEST,
});

export const homeworkUpdateRequestSuccess = (
  homework: IHomeworks
): HomeworkUpdateRequestSuccess => ({
  type: HomeworkTypes.UPDATE_HOMEWORK_REQUEST_SUCCESS,
  homework,
});

export const homeworkUpdateFail = (error: Error): HomeworkUpdateFail => ({
  type: HomeworkTypes.UPDATE_HOMEWORK_REQUEST_FAIL,
  error,
});

/**
 * DELETE
 */

export const homeworkDeleteRequest = (): HomeworkDeleteRequest => ({
  type: HomeworkTypes.DELETE_HOMEWORK_REQUEST,
});

export const homeworkDeleteRequestSuccess = (
  id: string
): HomeworkDeleteRequestSuccess => ({
  type: HomeworkTypes.DELETE_HOMEWORK_REQUEST_SUCCESS,
  id,
});

export const homeworkDeleteRequestFail = (
  error: Error
): HomeworkDeleteRequestFail => ({
  type: HomeworkTypes.DELETE_HOMEWORK_REQUEST_FAIL,
  error,
});
