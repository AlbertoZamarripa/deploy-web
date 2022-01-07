import {
  homeworkDeleteRequest,
  homeworkDeleteRequestFail,
  homeworkDeleteRequestSuccess,
  homeworkRegister,
  homeworkRegisterFail,
  homeworkRegisterSuccess,
  homeworkRequest,
  homeworkRequestFail,
  homeworkRequestSuccess,
  homeworkStartEdit,
  homeworkUpdateFail,
  homeworkUpdateRequest,
  homeworkUpdateRequestSuccess,
} from "./homework.actions";
import courseService from "../../../../../services/courses.service";
import { IHomeworks, IRegister, IUpdateHomework } from "../../entities";

export const registerHomework = (newHomework: IRegister) => (dispatch: any) => {
  dispatch(homeworkRegister());
  return courseService.registerWork(newHomework).then(
    (homework) => {
      dispatch(homeworkRegisterSuccess(homework));
    },
    (error) => {
      dispatch(homeworkRegisterFail(error));
    }
  );
};

export const getListHomeworks = (id: string) => (dispatch: any) => {
  dispatch(homeworkRequest());
  return courseService.getListHomeworks(id).then(
    (homeworks) => {
      dispatch(homeworkRequestSuccess(homeworks));
    },
    (error) => {
      dispatch(homeworkRequestFail(error));
    }
  );
};

export const editStart = (homework: IHomeworks) => (dispatch: any) => {
  dispatch(homeworkStartEdit(homework));
};

export const updateHomework =
  (homework: IUpdateHomework) => (dispatch: any) => {
    dispatch(homeworkUpdateRequest());
    return courseService.updateHomework(homework).then(
      (homework) => {
        dispatch(homeworkUpdateRequestSuccess(homework));
      },
      (error) => {
        dispatch(homeworkUpdateFail(error));
      }
    );
  };

export const deleteHomework = (id: string) => (dispatch: any) => {
  dispatch(homeworkDeleteRequest());
  return courseService.deleteHomework(id).then(
    (response) => {
      dispatch(homeworkDeleteRequestSuccess(id));
    },
    (error) => {
      dispatch(homeworkDeleteRequestFail(error));
    }
  );
};
export default {
  registerHomework,
  getListHomeworks,
  editStart,
  updateHomework,
  deleteHomework,
};
